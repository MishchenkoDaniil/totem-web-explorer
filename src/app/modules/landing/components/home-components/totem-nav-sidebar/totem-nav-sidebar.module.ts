import { NgModule } from '@angular/core';

import { TotemNavSidebarComponent } from './totem-nav-sidebar.component';
// packages
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TotemButtonModule } from '../../common-components/totem-button/totem-button.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    TotemNavSidebarComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    TotemButtonModule,
    MatIconModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    TotemNavSidebarComponent
  ],
  providers: [],
})
export class TotemNavSidebarModule {}
