import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { GithubUsers } from '../providers/github-users';
import {UserDetailsPage } from '../pages/user-details/user-details';
import { TabsPage } from '../pages/tabs/tabs';

import { MorePage } from '../pages/more/more';
import { SetmenuPage } from '../pages/setmenu/setmenu';
import { DishPage } from '../pages/dish/dish';
import { ProductPage } from '../pages/product/product';
import { HomePage } from '../pages/home/home';
import { SetmenuDetailPage } from '../pages/setmenu-detail/setmenu-detail';
import { DishDetailPage } from '../pages/dish-detail/dish-detail';
import { SetmenuFilterPage } from '../pages/setmenu-filter/setmenu-filter';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '31ce3214',
  },
  'push': {
    'sender_id': '763535135526',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    MorePage,
    TabsPage,
    SetmenuPage,
    DishPage,
    ProductPage,
    HomePage,
    SetmenuDetailPage,
    DishDetailPage,
    SetmenuFilterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement:'top'}),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    MorePage,
    TabsPage,
    SetmenuPage,
    DishPage,
    ProductPage,
    HomePage,
    SetmenuDetailPage,
    DishDetailPage,
    SetmenuFilterPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}