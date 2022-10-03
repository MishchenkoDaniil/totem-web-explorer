import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlchemyService } from '@app/core/services/crypto/alchemy-api.service';
import { AvatarsService } from '@app/core/services/items/avatars.service';
import { Web3AuthService } from '@app/core/web3auth/web3auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-avatars',
  templateUrl: './user-avatars.component.html',
  styleUrls: ['./user-avatars.component.scss']
})
export class UserAvatarsComponent implements OnInit {

  constructor(private avatarsService: AvatarsService,
              private web3Service: Web3AuthService,
              private alchService: AlchemyService) { }

  sub!: Subscription;
  avatars: any[] = [];

  async ngOnInit() {
    const wallet = await this.web3Service.getAccounts();
    this.avatarsService.fetchAvatars(wallet).subscribe(avatars => {
      this.avatars = this.avatars.concat(avatars);
    });

    this.alchService.getNfts(wallet).subscribe((nfts: any[]) => {
      console.log(nfts);
      for(let nft of nfts) {
        nft.id.tokenId = parseInt(nft.id.tokenId);
        if(nft.contractMetadata.name === 'Avatar') {
          this.avatars.unshift(nft);
        }
      }
    })

  }

  ngOnDestroy () {
    this.sub?.unsubscribe();
  }

}
