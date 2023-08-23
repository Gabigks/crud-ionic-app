import { Injectable } from '@angular/core';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Injectable()
export class LocationProvider {


  constructor(
    private geolocation: Geolocation
    ) {
    console.log('Hello LocationProvider Provider');
  }

  getCurrentPosition(): Promise<Geoposition> {
    return this.geolocation.getCurrentPosition();
  }

}
