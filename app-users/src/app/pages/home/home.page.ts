import { Component } from '@angular/core';
import { TranslateValueService } from 'src/app/shared/services/translateValue.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = '';
  tabs: any[] = [];

  constructor(
    private _t: TranslateValueService
    ) {}

  ionViewDidEnter(): void {
    this._initialiseTranslation();
    this.listTabs();
  }

  _initialiseTranslation(): void {
    this.title = this._t.l('Title.home');
  }

  listTabs() {
    this.tabs=[
      {
        tab:"profile",
        icon:"person-circle-outline",
        label:"Tabs.profile"
      },
      {
        tab:"userList",
        icon:"people-outline",
        label:"Tabs.users"
      },
            {
        tab:"favoriteUser",
        icon:"bookmark-outline",
        label:"Tabs.favorite"
      }
    ]
  }
}
