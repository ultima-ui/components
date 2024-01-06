import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinInputComponent } from './pin-input/pin-input.component';

@NgModule({
  declarations: [
    PinInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PinInputComponent
  ]
})
export class UltPinInputModule { }
