import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { FilterMenuModule } from "../../components/components/filter-menu/filter-menu.module";
import { DNAFilterMenuModule } from "../menu/dna-filter-menu/dna-filter-menu.module";
import { AssetsMenusComponent } from "./assets-menus.component";

@NgModule({
    declarations: [
        AssetsMenusComponent
    ],
    imports: [
        SharedModule,
        FilterMenuModule,
        DNAFilterMenuModule
    ],
    exports: [
        AssetsMenusComponent
    ]
})

export class AssetsMenusModule {
    
}