import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;
  login: string;
  //tabBarElement: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
   // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    })
  }

 // ionViewDidEnter() {
 //    let elem = <HTMLElement>document.querySelector(".tabbar");
 //    if (elem != null) {
 //      elem.style.display = 'none';
 //    }
 //  }
 
  // ionViewWillEnter() {
  //   this.tabBarElement.style.display = 'none';
  // }
 
  // ionViewWillLeave() {
  //   this.tabBarElement.style.display = 'flex';
  // }

  //   takeMeBack() {
  //   this.navCtrl.parent.select(0);
  // }
}