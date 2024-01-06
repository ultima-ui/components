import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  declarations: [
    NumberInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberInputComponent
  ]
})
export class UltNumberInputModule { }
