import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TagsService } from '@app/core/services/filters/tags.service';

@Component({
  selector: 'filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent {

  constructor(private tagsService: TagsService){}

  menuActive = false;

  @ViewChild('wrapper') wrapper!: ElementRef;

  @Input() inputType = 'checkbox';
  @Input() title = 'Title'
  @Input() searchType: string | null = 'search';
  @Input() items: any[] | undefined = [{name: 'Game', genre: 'casual'}, {name: 'Game', genre: 'casual'}, {name: 'Game', genre: 'casual'}, {name: 'Game', genre: 'casual'}, {name: 'Game', genre: 'casual'}, {name: 'Game', genre: 'casual'}, ];

  checkedItems: any = [];

  onChangeInput(event: any) {
    const value = event.target.value;
    this.tagsService.addTag = value;
    this.checkedItems.push(value);
  }

  onClickMenu() {
    this.menuActive = !this.menuActive;

    if(this.menuActive) {
      this.wrapper.nativeElement.style.maxHeight = '340px';
    } else if (!this.menuActive) {
      this.wrapper.nativeElement.style.maxHeight = '50px';
    }
  }
}
