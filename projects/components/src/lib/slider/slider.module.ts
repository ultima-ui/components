import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SliderThumbDirective } from "./slider-thumb.directive";
import { SliderThumbRangeDirective } from "./slider-thumb-range.directive";

@NgModule({
  declarations: [
    SliderComponent,
    SliderThumbDirective,
    SliderThumbRangeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    SliderThumbDirective,
    SliderThumbRangeDirective
  ]
})
export class UltSliderModule { }
