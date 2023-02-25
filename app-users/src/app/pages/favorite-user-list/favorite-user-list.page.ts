import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TranslateValueService } from 'src/app/shared/services/translateValue.service';
import { DbKey } from 'src/app/shared/utils/dbKey';

@Component({
  selector: 'app-favorite-user-list',
  templateUrl: './favorite-user-list.page.html',
  styleUrls: ['./favorite-user-list.page.scss'],
})
export class FavoriteUserListPage implements OnInit {
  title: string = '';
  search: string = '';
  users: any[] = [];

  constructor(
    private _t: TranslateValueService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.title = this._t.l('Tabs.favorite');
  }

  ionViewDidEnter() {
    this.getFavorite();
  }

  getFavorite() {
    this.storage.get(DbKey.userFavoriteKey).then((result) => {
      this.users = result;
    });
  }

  onChangeSeach(e: any) {
    this.search = e.detail.value;
  }
}
