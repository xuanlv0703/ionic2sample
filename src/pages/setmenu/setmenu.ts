import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Setmenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setmenu',
  templateUrl: 'setmenu.html'
})
export class SetmenuPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SetmenuPage Page');
  }

    onSlideChanged() {
    	console.log('slider change.')
  }

}
