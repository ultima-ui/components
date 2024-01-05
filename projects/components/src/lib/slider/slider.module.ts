import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SliderInputDirective } from './slider-input.directive';

@NgModule({
  declarations: [
    SliderComponent,
    SliderInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class UltSliderModule { }
