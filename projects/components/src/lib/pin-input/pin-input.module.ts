import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinInputComponent } from './pin-input/pin-input.component';
import { UltFormsModule } from '../forms';
import { PinInputDirective } from './pin-input.directive';

@NgModule({
  declarations: [
    PinInputComponent,
    PinInputDirective
  ],
  imports: [
    CommonModule,
    UltFormsModule
  ],
  exports: [
    PinInputComponent
  ]
})
export class UltPinInputModule { }
