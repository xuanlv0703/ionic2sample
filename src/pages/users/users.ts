import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  originalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
      githubUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    })
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  load2(){
    var since = this.users.length;
    this.githubUsers.load2(since).subscribe(users => {
      for (let x of users){

        this.users.unshift(x);
      }
      });
  }

   load3(){
    this.githubUsers.load2(20).subscribe(users => {
      for (let x of users){

        this.users.push(x);
      }
      });
  }

    doRefresh(refresher) {
      this.load2();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

    doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
       this.load3();

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }
}