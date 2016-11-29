import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

/*
  Generated class for the More page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MorePage Page');
  }

  profile() {
    this.navCtrl.setRoot(ProfilePage);
  }


  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  // support() {
  //   this.nav.push(SupportPage);
  // }
}
