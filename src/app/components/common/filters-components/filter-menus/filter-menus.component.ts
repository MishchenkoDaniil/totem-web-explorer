import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ASSET_TYPE } from "@app/core/models/enums/asset-types.enum";
import { DNAField } from "@app/core/models/interfaces/dna-field.model";
import { GameDetail } from "@app/core/models/interfaces/submit-game-interface.model";
import { DNAParserService } from "@app/core/services/utils/dna-parser.service";
import { Subject } from "rxjs";
import { FiltersService } from "../filters.service";

@Component({
    selector: 'filter-menus',
    templateUrl: './filter-menus.component.html',
    styleUrls: ['./filter-menus.component.scss'],
    host: {
        class: 'flex w-0 h-0 lg:w-[320px] lg:h-[auto] lg:mr-[15px]'
    }
})


export class FilterMenusComponent implements OnDestroy {

    constructor(private dnaService: DNAParserService,
                private filtersService: FiltersService) {}

    @Input() type!: ASSET_TYPE | 'game';

    selectedGame!: GameDetail;
    dropupActive: boolean = false;
    subs = new Subject<void>();

    ngOnInit() {
        this.filtersService.dropupActive$.subscribe(isActive => {
            this.dropupActive = isActive;
        })
    }

    onClickApply() {
        // this.filtersService.dropupOpen = false;
    }

    clearAll() {
        // this.filtersService.resetFilters();
    }

    ngOnDestroy(): void {
        this.subs.next();
        this.subs.complete();
    }

}