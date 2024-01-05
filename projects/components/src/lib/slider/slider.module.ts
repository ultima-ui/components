import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SliderInputDirective } from './slider-input.directive';
import { SliderThumbDirective } from './slider-thumb.directive';

@NgModule({
  declarations: [
    SliderComponent,
    SliderInputDirective,
    SliderThumbDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class UltSliderModule { }
