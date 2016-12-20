import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DishDetailPage } from '../dish-detail/dish-detail';

/*
  Generated class for the Dish page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dish',
  templateUrl: 'dish.html'
})
export class DishPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DishPage Page');
  }

  goDetail(){
    this.navCtrl.push(DishDetailPage);
  }

}
