import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SliderInputDirective } from './slider-input.directive';
import { SliderKnobDirective } from './slider-knob.directive';

@NgModule({
  declarations: [
    SliderComponent,
    SliderInputDirective,
    SliderKnobDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class UltSliderModule { }
