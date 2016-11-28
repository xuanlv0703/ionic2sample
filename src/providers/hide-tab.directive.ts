import { Directive } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Directive({
  selector: '[hideTabs]'
})
export class HideTabsDirective {
  constructor(private viewCtrl: ViewController) {
    // hide tabs when view loads
    this.viewCtrl.didEnter.subscribe(() => {
      let tabs = document.querySelectorAll('.tabbar');

      if ( tabs !== null ) {
        Object.keys(tabs).map((key) => {
          tabs[ key ].style.transform = 'translateY(56px)';
        });
      } // end if
    });

    // show tabs when view exits
    this.viewCtrl.willLeave.subscribe(() => {
      let tabs = document.querySelectorAll('.tabbar');

      if ( tabs !== null ) {
        Object.keys(tabs).map((key) => {
          tabs[ key ].style.transform = 'translateY(0)';
        });
      } // end if
    });
  }
}