import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SliderThumbDirective } from "./slider-thumb.directive";
import { SliderThumbStartDirective } from "./slider-thumb-start.directive";
import { SliderThumbEndDirective } from "./slider-thumb-end.directive";

@NgModule({
  declarations: [
    SliderComponent,
    SliderThumbDirective,
    SliderThumbStartDirective,
    SliderThumbEndDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    SliderThumbDirective,
    SliderThumbStartDirective,
    SliderThumbEndDirective
  ]
})
export class UltSliderModule { }
