import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataAccessService } from 'src/app/shared/services/data-access.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TranslateValueService } from 'src/app/shared/services/translateValue.service';
import { AppConst } from 'src/app/shared/utils/const';
import { DbKey } from 'src/app/shared/utils/dbKey';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public type: string = 'password';
  public icono: string = 'eye';
  public register: boolean = false;

  lang: string = '';
  users:any[] = [];
  user: any = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private dataAccess: DataAccessService,
    private toasService: ToastService,
    private loadingService: LoadingService,
    private _t: TranslateValueService,
    private storage: StorageService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.dataAccess.getLanguage().then((lang) => {
      if (!lang) {
        lang = 'en';
      }
      this.lang = lang;
      this.translateService.setDefaultLang(lang);
      this.dataAccess.setLanguage(lang);
    });
    this.getListUser();
  }

  async onClickLogin() {
    await this.loadingService.presentLoading();
    if(this.user?.email == ''   ||  this.user?.password == ''){
      this.loadingService.dismissLoading();
      return this.toasService.presentToast(this._t.l('Message.infoLogin') + ' ' + this.user.email, 2000, 'alert-circle-outline', AppConst.WarningColor);;   
    }
    if (this.validateEmail()) {
      let user = this.getUserByEmailAndPassword(this.user.email,this.user.password);
      if(user){
        this.storage.set(DbKey.userLocalKey,user);
        this.loadingService.dismissLoading();
        this.toasService.presentToast(this._t.l('Title.welcome') + ' ' + this.user.email, 2000, 'checkmark-circle', AppConst.SuccessColor);
        return this.router.navigateByUrl(AppConst.Profile);
      }
      this.loadingService.dismissLoading();
      this.toasService.presentToast(this._t.l('Message.errorLogin') + ' ' + this.user.email, 2000, 'alert-circle-outline', AppConst.WarningColor);
      return;
    }
    this.loadingService.dismissLoading();
    this.toasService.presentToast(this._t.l('Message.invalidEmail') + ' ' + this.user.email, 2000, 'alert-circle-outline', AppConst.DangerColor);
    return;
  }

  getTypeInput() {
    if (this.type === 'password') {
      this.type = 'text';
      this.icono = 'eye-off';
    } else {
      this.type = 'password';
      this.icono = 'eye';
    }
  }

  changeLanguage(event: any) {
    this.translateService.setDefaultLang(event.detail.value);
    this.dataAccess.setLanguage(event.detail.value);
  }

  validateEmail(): boolean {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(this.user.email)) {
      return true;
    } else {
      return false;
    }
  }

  getListUser(){
    this.storage.get(DbKey.userListKey).then((result) => {
      this.users = result;
    });
  }

  getUserByEmailAndPassword(email: string, password: string):any {
    let user = this.users.find(x=>x.email == email && x.password == password);
    console.log(user);
    return user;
  }
}
