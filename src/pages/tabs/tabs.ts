import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ReposPage } from '../repos/repos';
import { OrganisationsPage } from '../organisations/organisations';
import { LoginPage } from '../login/login';

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

  tab1Root: any = LoginPage;

  tab2Root: any = ReposPage;
  tab3Root: any = OrganisationsPage;
  tab4Root: any = UsersPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
