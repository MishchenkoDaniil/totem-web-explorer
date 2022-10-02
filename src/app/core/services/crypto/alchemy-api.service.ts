import { Injectable } from "@angular/core";

import { AssetTransfersCategory, AssetTransfersOrder, createAlchemyWeb3 } from "@alch/alchemy-web3";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, from, map, publishReplay, shareReplay, take } from "rxjs";


const ALCHEMY_KEY = environment.ALCHEMY_KEY;
const web3 = createAlchemyWeb3(ALCHEMY_KEY)

interface CachedTotalItems {
    totalItems?: number;
    totalAvatars?: number;
    totalGems?: number;
}
@Injectable({ providedIn: 'root' })

export class AlchemyService {

    constructor(private http: HttpClient) { }

    totalItems = new BehaviorSubject<CachedTotalItems>({});

    getNfts(wallet: string) {
        return from(web3.alchemy.getNfts({ owner: wallet })).pipe(
            take(1),
            map(nfts => this.nftsHandler(nfts.ownedNfts)));
    }

    nftsHandler(nfts: any) {
        console.log(nfts);
        const formattedNfts: any[] = [];
        for (let nft of nfts) {
            // if(nft.title == '') continue;
            nft.timeLastUpdated = new Date(nft.timeLastUpdated).toLocaleDateString();
            formattedNfts.push(nft);
        }
        const sortedNfts = formattedNfts.sort(function (a, b): any {
            return Date.parse(a.timeLastUpdated) - Date.parse(b.timeLastUpdated);

        });
        return sortedNfts;
    }

    getUserTotalItems(wallet: string) {
        return this.getNfts(wallet).pipe(
            map(nfts => {
                let totalAvatars = 0;
                let totalItems = 0;
                let totalGems = 0;

                nfts.forEach(nft => {
                    if (nft.contractMetadata.name === 'Avatar') totalAvatars++;
                    if (nft.contractMetadata.name === 'Item') totalItems++;
                    if (nft.contractMetadata.name === 'Gem') totalGems++;    
                })
                console.log('total items ')
                const cache = this.totalItems.getValue();
                cache.totalAvatars = totalAvatars;
                cache.totalItems = totalItems;
                cache.totalGems = totalGems;
                this.totalItems.next(cache);
            })
        )
    }

    async getNftMetadata(nft: any) {
        return web3.alchemy.getNftMetadata({ contractAddress: nft, tokenId: '0' });
    }

    async getTransactionHistory(wallet: string) {
        let transactions: any[] = [];

        const from = await web3.alchemy.getAssetTransfers({
            fromAddress: wallet,
            category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.ERC20, AssetTransfersCategory.ERC721, AssetTransfersCategory.ERC1155],
        })

        const to = await web3.alchemy.getAssetTransfers({
            toAddress: wallet,
            category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.ERC20, AssetTransfersCategory.ERC721, AssetTransfersCategory.ERC1155],
        })

        transactions = transactions.concat(to.transfers);
        transactions = transactions.concat(from.transfers);

        return transactions;
    }


}