import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/shared/services/data-access.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TranslateValueService } from 'src/app/shared/services/translateValue.service';
import { DbKey } from 'src/app/shared/utils/dbKey';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  title: string = '';
  search: string = '';
  users: any[] = [];

  constructor(
    private _t: TranslateValueService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.title = this._t.l('Tabs.users');
  }

  ionViewDidEnter() {
    this.getUsers();
  }

  getUsers() {
    this.storage.get(DbKey.userListKey).then((result) => {
      this.users = result;
    });
  }

  onChangeSeach(e: any) {
    this.search = e.detail.value;
  }

  onClickFavorite(data: any) {
    let auxlist:any[] = [];
    this.users.forEach(item => {
      if(item.id == data.id && !item.favorite ){
        item.favorite = true;
      }else if(item.id == data.id && item.favorite ){
        item.favorite = false;
      }
    });
    this.storage.set(DbKey.userListKey, this.users);
    auxlist = this.users.filter((x) => x.favorite == true);
    this.storage.set(DbKey.userFavoriteKey, auxlist);
  }
}
