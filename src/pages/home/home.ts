import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SetmenuPage } from '../setmenu/setmenu';
import { DishPage } from '../dish/dish';
import { ProductPage } from '../product/product';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = SetmenuPage;
  tab2Root: any = DishPage;
  tab3Root: any = ProductPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams,public navCtrl: NavController) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.mySelectedIndex = 0;
  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}
