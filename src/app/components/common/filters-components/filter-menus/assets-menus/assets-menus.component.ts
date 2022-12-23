import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ASSET_TYPE } from "@app/core/models/enums/asset-types.enum";
import { INPUT_TYPE } from "@app/core/models/enums/input-type.enum";
import { DNAField } from "@app/core/models/interfaces/dna-field.model";
import { GameDetail } from "@app/core/models/interfaces/submit-game-interface.model";
import { GamesService } from "@app/core/services/assets/games.service";
import { DNAParserService } from "@app/core/services/utils/dna-parser.service";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'assets-menus',
    templateUrl: './assets-menus.component.html',
    // styleUrls: ['../styles/filter-menus.component.scss']
})

export class AssetsMenusComponent implements OnInit, OnDestroy {
    get inputType() { return INPUT_TYPE };

    constructor(private gamesService: GamesService,
                private dnaService: DNAParserService) {}
    
    @Input() menuType!: ASSET_TYPE;
    items: DNAField[] | undefined;

    subs = new Subject<void>();

    ngOnInit() {
        this.selectedGame$();
    }

    selectedGame$() {
        this.gamesService.selectedGame$
            .pipe(takeUntil(this.subs))
        .subscribe(selectedGame => {
            this.processFiltersContent(selectedGame);
        })
    }

    processFiltersContent(game: GameDetail | null) {
        // const items = this.dnaService.getJSON(game?.general?.name, this.menuType);
        // const items = this.dnaService.getJSON1();
        // console.log('json', items)
        // this.items = items;
    }

    ngOnDestroy(): void {
        this.subs.next();
        this.subs.complete();
    }
}