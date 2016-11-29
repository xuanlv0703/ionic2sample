import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen, NativeStorage } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,  public menu: MenuController) {
      this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Organisations', component: OrganisationsPage }
    ];
    this.initializeApp();
    // StatusBar.styleDefault();
    // Splashscreen.hide();

  
  }

  initializeApp() {
    let env = this;
    env.platform.ready().then(() => {
       console.log('ready....')
         // set our app's pages
  
       // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      
      NativeStorage.getItem('user_profile')
      .then( function (data) {
        console.log('co data')
        // user is previously logged and we have his data
        // we will let him access the app
        // env.nav.push(UsersPage);
        env.rootPage = TabsPage;
        Splashscreen.hide();
      }, function (error) {
        console.log('ko data')
        //we don't have the user data so we will ask him to log in
        // env.nav.push(LoginPage);
        env.rootPage = LoginPage;
        Splashscreen.hide();
      });
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    let env = this;
    // close the menu when clicking a link from the menu
    env.menu.close();
    // navigate to the new page if it is not the current page
    env.nav.setRoot(page.component);
  }
}
