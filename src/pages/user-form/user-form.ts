import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationProvider } from '../../providers/location/location';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user-interface';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserFormPage {

  myForm: FormGroup;
  userPicture: String = null;
  long: Number;
  lat: Number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocationProvider: LocationProvider,
    private formBuilder: FormBuilder,
    private storage: Storage
    ) {
      this.myForm = this.formBuilder.group({
        name: ['', Validators.required],
        birthdate: ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    this.geolocationProvider.getCurrentPosition().then(position => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`);
    }).catch(error => {
      console.log('Error getting location ', error);
    });
  }

  handlePictureTaken(pictureData: String) {
    this.userPicture = pictureData;
  }

  async submitForm() {
    if (this.myForm.valid) {
      const user: User = {
        name: this.myForm.value.name,
        birthdate: this.myForm.value.birthdate,
        geolocation: {
          latitude: this.lat,
          longitude: this.long
        },
        picture: this.userPicture
      };
      console.log(user);
      
      const existingUsers: User[] = await this.storage.get('users') || []

      existingUsers.push(user);

      await this.storage.set(`users`, existingUsers);

      this.myForm.reset();
    }
  }

}
