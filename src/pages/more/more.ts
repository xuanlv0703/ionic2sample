import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

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
   rootPage: any;

  constructor(public navCtrl: NavController, public appCtrl: App) {}

  ionViewDidLoad() {
    console.log('Hello MorePage Page');
  }

  profile() {
    // this.navCtrl.setRoot(ProfilePage);
    this.appCtrl.getRootNav().push(ProfilePage);
  }


  logout(){
    var nav = this.navCtrl;
    // nav.setRoot(LoginPage);
     this.appCtrl.getRootNav().push(LoginPage);
  }

  // support() {
  //   this.nav.push(SupportPage);
  // }
}
