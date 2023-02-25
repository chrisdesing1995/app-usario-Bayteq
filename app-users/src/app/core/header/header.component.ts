import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TranslateValueService } from 'src/app/shared/services/translateValue.service';
import { AppConst } from 'src/app/shared/utils/const';
import { DbKey } from 'src/app/shared/utils/dbKey';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() visibleBackButton: boolean = false;
  @Input() visibleMenu: boolean = false;
  @Input() visibleSetting: boolean = false;
  @Input() valueHref: string = '';

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private storage: StorageService,
    private presentService: AlertsService,
    private _t: TranslateValueService
  ) {}

  ngOnInit() {}

  async logout() {

    this.presentService.presentAlertConfirm(
      this._t.l('Message.confirm'),
      '',
      this._t.l('Message.infoCloseSession'),
      [
        {
          text: this._t.l('Button.cancel'),
          role: 'cancel',
          handler: () => {},
        },
        {
          text: this._t.l('Button.accept'),
          role: 'confirm',
          handler: async () => {
            await this.loadingService.presentLoading();
            this.storage.remove(DbKey.userLocalKey).then(() => {
              this.loadingService.dismissLoading();
              this.router.navigateByUrl(AppConst.LoginPage);
            });
          },
        },
      ]
    );

    
  }
}
