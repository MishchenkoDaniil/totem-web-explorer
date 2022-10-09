import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CacheService } from '@app/core/services/cache.service';
import { AlchemyService } from '@app/core/services/crypto/alchemy-api.service';
import { ItemsService } from '@app/core/services/items/items.service';
import { Web3AuthService } from '@app/core/web3auth/web3auth.service';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-avatars',
  templateUrl: './user-avatars.component.html',
  styleUrls: ['./user-avatars.component.scss']
})
export class UserAvatarsComponent implements OnInit {

  constructor(private web3Service: Web3AuthService,
              private alchService: AlchemyService,
              private itemsService: ItemsService,
              private cacheService: CacheService) { }

  subs = new Subject<void>();
  avatars!: any[];

  async ngOnInit() {
    // this.filters$();
    // this.fetchAvatars();
    this.getNfts();
  }

  // filters$() {
  //   this.itemsService.filters$.pipe(takeUntil(this.subs)).subscribe(filters => {
  //     this.fetchAvatars(filters);
  //   })
  // }

  // fetchAvatars(filters?: ItemParam[]) {
  //   this.itemsService.getAvatars$(filters).pipe(takeUntil(this.subs)).subscribe(avatars => {
  //     this.avatars = avatars;
  //   })
  // }

  async getNfts() {
    const wallet = await this.web3Service.getAccounts();

    this.alchService.getNfts(wallet).subscribe((nfts: any[]) => {
      const avatars: any[] = [];
      for(let nft of nfts) {
        nft.id.tokenId = parseInt(nft.id.tokenId);
        if(nft.contractMetadata.name === 'Avatar') {
          avatars.push(nft);
        }
      }
      this.avatars = avatars;
      this.cacheService.setItemCache('avatar', this.avatars.length);
    })
  }

  

  ngOnDestroy () {
    this.subs.next();
    this.subs.complete();
  }

}
