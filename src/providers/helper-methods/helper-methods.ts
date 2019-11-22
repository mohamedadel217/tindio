import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Loading } from 'ionic-angular';

/*
  Generated class for the HelperMethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperMethodsProvider {
  loading: Loading;

  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController) {
    console.log('Hello HelperMethodsProvider Provider');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  

  presentLoading() {
    console.log('presented')
    this.loading = this.loadingCtrl.create();

    this.loading.present();
  }

  dismissLoading() {
    console.log('dimsissed')
    this.loading.dismiss();
  }

}

 
