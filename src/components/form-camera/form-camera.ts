import { Component, EventEmitter, Output } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'form-camera',
  templateUrl: 'form-camera.html'
})
export class FormCameraComponent {

  @Output() pictureTaken: EventEmitter<String> = new EventEmitter<string>();

  pictureData: String = null;

  constructor(
    private camera: Camera,
    ) { }

  async onTakePicture() {
    this.pictureData = await this.takePicture();
    this.pictureTaken.emit(this.pictureData);
  }  

  takePicture(): Promise<string> {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    return this.camera.getPicture(options)
    .then(imageData => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      return base64Image;
    })
    .catch(err => {
      console.log('Error taking picture:', err);
      return null;
    });
  }

}
