import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../interfaces/user-interface';

@IonicPage()
@Component({
  selector: 'page-user-infos',
  templateUrl: 'user-infos.html',
})
export class UserInfosPage {

  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfosPage');
  }

}
