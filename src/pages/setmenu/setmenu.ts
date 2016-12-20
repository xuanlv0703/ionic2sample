import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { SetmenuDetailPage } from '../setmenu-detail/setmenu-detail';
import { SetmenuFilterPage } from '../setmenu-filter/setmenu-filter';
/*
  Generated class for the Setmenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setmenu',
  templateUrl: 'setmenu.html'
})
export class SetmenuPage {
  excludeTracks = [];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello SetmenuPage Page');
  }

    onSlideChanged() {
    	console.log('slider change.')
  }

  goDetail(){
    this.navCtrl.push(SetmenuDetailPage);
  }

   updateSchedule() {
    console.log(this.excludeTracks);
  }

  presentFilter(){
      let modal = this.modalCtrl.create(SetmenuFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
       console.log('close modal.')
    });
  }

}
