import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteUserListPage } from './favorite-user-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'favoriteUser',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FavoriteUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteUserListPageRoutingModule {}
