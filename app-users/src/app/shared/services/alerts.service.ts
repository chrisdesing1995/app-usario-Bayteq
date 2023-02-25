import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {

  constructor(public alertController: AlertController) {
  }

  async presentAlertConfirm(
    header?: string,
    subtitle?: string,
    message?: string,
    buttons?: any[]
  ) {
    const alert = await  this.alertController.create({
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: buttons,
    });

    await alert.present();
  }

  async presentAlert(
    header?: string,
    subtitle?: string,
    message?: string,
    buttons?: any[]
  ) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: buttons
    });
    await alert.present();
  }
}
