import { Component, Input, OnInit } from '@angular/core';
import { SnackNotifierService } from '@app/components/utils/snack-bar-notifier/snack-bar-notifier.service';
import { AssetInfo } from '@app/core/models/interfaces/asset-info.model';
import { Achievement } from '@app/core/models/interfaces/legacy.model';
import { LegacyService } from '@app/core/services/crypto/legacy.service';

@Component({
  selector: 'item-legacy',
  templateUrl: './item-legacy.component.html',
  styleUrls: ['./item-legacy.component.scss']
})
export class ItemLegacyComponent implements OnInit {

  achievementData(data: string) {
    if(data.length > 4) {
      return data.slice(0,4) + '...' + data.slice(-(data.length - 4));
    }
    return data;

  }

  constructor(
    private legacyService: LegacyService,
    private messageService: SnackNotifierService,
  ) { }

  achievements!: Achievement[];
  @Input() asset!: AssetInfo;

  ngOnInit(): void {

    this.legacyService.fetchLegacies(this.asset.tokenId).subscribe(leg => {
      if(!leg.achievements) return;
      console.log(leg)
      this.achievements = leg.achievements;
    })
  }

  onCopy() {
    this.messageService.open('Copied to the clipboard');
  }

}
