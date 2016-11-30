import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { OrganisationsPage } from '../organisations/organisations';
import { LoginPage } from '../login/login';
import { MorePage } from '../more/more';
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {





    tab1Root: any = UsersPage;

  tab3Root: any = OrganisationsPage;
  tab4Root: any = MorePage;

  // constructor(public navCtrl: NavController) {}

  mySelectedIndex: number;

  constructor(navParams: NavParams,public navCtrl: NavController) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.mySelectedIndex = 0;
    // console.log(this.mySelectedIndex)
  }


  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }
}