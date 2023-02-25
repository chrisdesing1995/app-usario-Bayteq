import { Component } from '@angular/core';
import { DataAccessService } from './shared/services/data-access.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';
import { DbKey } from './shared/utils/dbKey';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private translateService: TranslateService,
    private dataAccess: DataAccessService,
    private storage: Storage

  ) {
    this.inicialieApp();
  }

  async inicialieApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });

    await this.storage.create();
    this.dataAccess.getLanguage().then((lang) => {
      if (!lang) {
        lang = 'en';
      }
      this.translateService.setDefaultLang(lang);
      this.dataAccess.setLanguage(lang);
    });
    this.dataAccess.getUserList();
    this.storage.set(DbKey.userFavoriteKey,[]);
  }
}
