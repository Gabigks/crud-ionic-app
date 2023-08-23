import { NgModule } from '@angular/core';
import { MyHeaderComponent } from './my-header/my-header';
import { IonicModule } from 'ionic-angular';
import { FormDefaultInputComponent } from './form-default-input/form-default-input';
import { FormCameraComponent } from './form-camera/form-camera';
@NgModule({
	declarations: [MyHeaderComponent,
    FormDefaultInputComponent,
    FormCameraComponent],
	imports: [IonicModule],
	exports: [MyHeaderComponent,
    FormDefaultInputComponent,
    FormCameraComponent]
})
export class ComponentsModule {}
