import { Component,ViewChild } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController,Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('mySlider') slider: Slides;
  FB_APP_ID: number = 340592482989316;
  cContent: string = 'login-content1';
  tabBarElement: any;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    Facebook.browserInit(this.FB_APP_ID, "v2.8");
    console.log('cons...');
  }

 // ionViewDidEnter() {
 //    let elem = <HTMLElement>document.querySelector(".tabbar");
 //    if (elem != null) {
 //      elem.style.display = 'none';
 //    }
 //  }

  //  ionViewWillEnter() {
  //   this.tabBarElement.style.display = 'none';
  // }

  // ionViewWillLeave() {
  //   this.tabBarElement.style.display = 'flex';
  // }

  onSlideChanged() {

    let currentIndex = this.slider.getActiveIndex();
    this.cContent = 'login-content'+currentIndex;
  }

  doGuestLogin(){
    this.navCtrl.setRoot(TabsPage);
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
          nav.setRoot(TabsPage);
        }, function (error) {
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });

  }
}
