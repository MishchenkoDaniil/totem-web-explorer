import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject, of, switchMap } from "rxjs";


@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})

export class SearchFieldComponent implements OnInit {

  constructor(private router: Router,) {

  }
  @Input() itemType: string = '';
  @Output() changedValue = new EventEmitter<any>();

  items: any[] = [];
  itemsArray = new BehaviorSubject<any[] | null>(null);
  searchControl = new FormControl('');

  menuActive: boolean = false;
  searchActive = false;
  searchInfo = new FormControl('');

  onChangeInput(target?: any) {
    this.changedValue.emit(target?.value || '');
  }

  ngOnInit(): void {
    this.initFormListener();
  }

  initFormListener() {
    this.searchInfo.valueChanges.pipe(
      switchMap((id: string | null) => {
        return of(id);
      })
    )
      .subscribe((text: string | null) => {
        if (text?.length) {
          this.getItems(text);
        }
      });
  }

  getItems(params: string) {
    let itemsArray = this.items.filter((item: any) => item.name.toLowerCase().includes(params));
    this.processItems(itemsArray && itemsArray.length ? itemsArray.slice(0, 4) : null);
  }

  processItems(items: any[] | null) {
    this.itemsArray.next(items);
  }

  reset() {
    console.log(this.searchControl)
    if (this.searchControl.value == '') return;
    this.searchControl.patchValue('');
  }

  onClickViewAll() {
    if (this.itemType === 'item') {
      this.router.navigate(['/items']);
    } else if (this.itemType === 'game') {
      this.router.navigate(['/games']);
    } else if (this.itemType === 'avatar') {
      this.router.navigate(['/avatars']);
    }
  }

  onFocus() {
    this.searchActive = true;
  }

  onBlur() {
    this.searchActive = false;
    console.log('reset')
    this.reset();
  }

  onClickMenu() {
    this.menuActive = !this.menuActive;
  }
}
