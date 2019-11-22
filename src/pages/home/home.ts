import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelperMethodsProvider } from '../../providers/helper-methods/helper-methods';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  doneLoading: boolean;
  i: number = 0;
  id: number = 0;

  itemsPaginated = [];

  constructor(public navCtrl: NavController,
    public helperMethods: HelperMethodsProvider,
    public dataProvider: DataProvider
  ) {

  }
  ionViewDidLoad() {
    this.loadData(this.id, true);
  }
  loadData(id, checker) {
    this.items = [];
    if (checker) {
      this.helperMethods.presentLoading();
    }
    this.dataProvider.getData(id, 24).subscribe((res: any) => {
      console.log(res);
      this.items = res.list;

      for (let i = 0; i < 24; i++) {
        this.itemsPaginated.push(this.items[i]);
      }
      console.log(this.itemsPaginated);
      if (this.helperMethods.loading.isOverlay) {
        this.helperMethods.dismissLoading();
      }
      console.log(this.items);

    }, error => {
      console.log(error);
      this.helperMethods.presentToast("There is error please try again")

    }
    )
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {

      this.id++;
      console.log(this.id);
      this.loadData(this.id,false);
      infiniteScroll.complete();
    }, 1000);
  }
}
