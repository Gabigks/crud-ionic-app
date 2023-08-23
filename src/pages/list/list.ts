import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../interfaces/user-interface';
import { UserInfosPage } from '../user-infos/user-infos';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  users: User[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
      this.loadUsers();
  }

  userTapped(event, user) {
    this.navCtrl.push(UserInfosPage, {
      user: user
    });
  }

  async loadUsers() {
    this.users = await this.storage.get('users') || [];
  }
}
