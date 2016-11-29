import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { LoginPage } from '../login/login';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;
  userReady: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('Hello profile Page');
  }



  ionViewCanEnter(){
    let env = this;
    env.user ={
      name: 'data.name',
        gender: 'data.gender',
        picture: null
    }

    NativeStorage.getItem('user_profile')
    .then(function (data){
      console.log(data)
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }

  doGuestLogout(){
    this.navCtrl.setRoot(LoginPage);
  }

  doFbLogout(){
    var nav = this.navCtrl;
    Facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      NativeStorage.remove('user_profile');
      nav.setRoot(LoginPage);
    }, function(error){
      console.log(error);
    });
      // NativeStorage.remove('user_profile');
      // // nav.push(LoginPage);
      // nav.setRoot(LoginPage);
  }
}

