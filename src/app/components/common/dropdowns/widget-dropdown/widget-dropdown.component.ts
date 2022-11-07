import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { timer } from "rxjs";
import { GameDropdownComponent } from "../game-dropdown/game-dropdown.component";


@Component({
    selector: 'widget-dropdown',
    templateUrl: '../game-dropdown/game-dropdown.component.html',
    styleUrls: ['../game-dropdown/game-dropdown.component.scss', './widget-dropdown.component.scss']
})

export class WidgetDropdownComponent extends GameDropdownComponent implements OnInit, OnDestroy {


    @ViewChild('menuItems') menuItems!: ElementRef;

    scriptStarted: boolean = false;

    ngOnInit() {
      this.alwaysOpen = true;
      this.menuActive = true;
      this.dropdownGames$();
    }

    dropdownGames$() {
      this.gamesService.dropdownGames$.subscribe(games => {
        if(games) this.restartScript();
      })
    }

    startScript() {
      this.scriptSub = timer(1000, 4000).subscribe(() => {
        if(this.scriptIndex == undefined) {
          this.scriptSub?.unsubscribe();
          return;
        }
        if(this.scriptIndex >= this.games.length) this.scriptIndex = 0;
        this.selectedScriptItem = this.games[this.scriptIndex];
        this.title = this.selectedScriptItem?.general?.name;
        const menuItems = this.menuItems.nativeElement.getElementsByClassName('menu-item');
        const itemBottomPos = menuItems[this.scriptIndex].offsetTop - 14;
        if(this.scriptIndex > 3) {
          const scrollContainer = this.menuItems.nativeElement as HTMLElement;
          scrollContainer.scroll({top: itemBottomPos, behavior: 'smooth'})
        } 
        if(this.scriptIndex == 0) {
          const scrollContainer = this.menuItems.nativeElement as HTMLElement;
          scrollContainer.scroll({top: 0, behavior: 'smooth'})
        }
        this.onChange.emit(this.selectedScriptItem);
        this.scriptIndex++;
      })
    }

    restartScript() {
      if(this.scriptIndex == undefined) return;
      this.scriptIndex = 0;
      this.scriptSub?.unsubscribe();
      this.startScript();
    }

}
