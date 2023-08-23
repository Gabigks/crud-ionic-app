import { Component, Input } from '@angular/core';

/**
 * Generated class for the FormDefaultInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-default-input',
  templateUrl: 'form-default-input.html'
})
export class FormDefaultInputComponent {

  @Input() label: String;
  @Input() type: String = 'text';

}
