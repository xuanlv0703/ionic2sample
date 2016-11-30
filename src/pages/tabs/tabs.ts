import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ReposPage } from '../repos/repos';
import { OrganisationsPage } from '../organisations/organisations';
import { LoginPage } from '../login/login';
import { MorePage } from '../more/more';
import { HomePage } from '../home/home';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;

  tab2Root: any = ReposPage;
  tab3Root: any = UsersPage;
  tab4Root: any = MorePage;

  // constructor(public navCtrl: NavController) {}

  mySelectedIndex: number;

  constructor(navParams: NavParams,public navCtrl: NavController) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.mySelectedIndex = 0;
    // console.log(this.mySelectedIndex)
  }


  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
