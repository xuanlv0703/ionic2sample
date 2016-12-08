import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SetmenuDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setmenu-detail',
  templateUrl: 'setmenu-detail.html'
})
export class SetmenuDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SetmenuDetailPage Page');
  }

}
