import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';

@NgModule({
  declarations: [
    CustomRadioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomRadioComponent
  ]
})
export class UltCustomRadioModule { }
