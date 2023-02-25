import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'userList',
        loadChildren: () =>
          import('../user-list/user-list.module').then((m) => m.UserListPageModule),
      },
      {
        path: 'favoriteUser',
        loadChildren: () =>
          import('../favorite-user-list/favorite-user-list.module').then(
            (m) => m.FavoriteUserListPageModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
