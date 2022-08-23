import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared/shared.module";
import { ProfileInfoComponent } from "./profile-info.component";


@NgModule({
    declarations: [
        ProfileInfoComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        ProfileInfoComponent
    ]
})

export class ProfileInfoModule {

}