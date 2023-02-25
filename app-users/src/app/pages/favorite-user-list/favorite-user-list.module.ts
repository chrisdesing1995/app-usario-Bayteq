import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteUserListPageRoutingModule } from './favorite-user-list-routing.module';

import { FavoriteUserListPage } from './favorite-user-list.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from 'src/app/core/header/header.module';
import { UserFilterPipe } from 'src/app/shared/pipes/user-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteUserListPageRoutingModule,
    TranslateModule,
    HeaderModule
  ],
  declarations: [FavoriteUserListPage,UserFilterPipe]
})
export class FavoriteUserListPageModule {}
