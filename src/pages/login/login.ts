import { Component,ViewChild } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController,Slides } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ReposPage } from '../repos/repos';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('mySlider') slider: Slides;
  FB_APP_ID: number = 340592482989316;
  cContent: string = 'login-content1';
  constructor(public navCtrl: NavController) {
    Facebook.browserInit(this.FB_APP_ID, "v2.8");
    console.log('cons...');
  }

 ionViewDidEnter() {
    let elem = <HTMLElement>document.querySelector(".tabbar");
    if (elem != null) {
      elem.style.display = 'none';
    }
  }

  onSlideChanged() {

    let currentIndex = this.slider.getActiveIndex();
    this.cContent = 'login-content'+currentIndex;
  }

  doFbLogin(){
    let permissions = new Array<string>();
    let nav = this.navCtrl;
    // //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    Facebook.login(permissions)
    .then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      Facebook.api("/me?fields=name,gender", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user_profile',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
          console.log('da save data login.')
          nav.setRoot(UsersPage);
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });

  }
}
