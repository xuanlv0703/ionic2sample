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
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement:'top'})
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
    TabsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}