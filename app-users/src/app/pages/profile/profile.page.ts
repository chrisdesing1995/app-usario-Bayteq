import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TranslateValueService } from 'src/app/shared/services/translateValue.service';
import { DbKey } from 'src/app/shared/utils/dbKey';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  title: string = '';
  user:any;

  constructor(
    private _t: TranslateValueService,
    private storage: StorageService) { }

  ngOnInit() {
    this.title = this._t.l('Tabs.profile');
  }

  ionViewDidEnter(){
    this.getUser();
  }

  getUser(){
    this.storage.get(DbKey.userLocalKey).then((result) => {
      this.user = result;
    });
  }

}
