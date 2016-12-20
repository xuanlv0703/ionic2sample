import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the SetmenuFilter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setmenu-filter',
  templateUrl: 'setmenu-filter.html'
})
export class SetmenuFilterPage {

  tracks: Array<{name: string, isChecked: boolean}> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  	 this.tracks.push({
          name: 'combo1',
          isChecked: true
        });
  	 this.tracks.push({
          name: 'combo2',
          isChecked: false
        });
  	 this.tracks.push({
          name: 'combo3',
          isChecked: true
        });
  	 this.tracks.push({
          name: 'combo4',
          isChecked: true
        });
  	 this.tracks.push({
          name: 'combo5',
          isChecked: false
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetmenuFilterPage');
  }

    resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

}
