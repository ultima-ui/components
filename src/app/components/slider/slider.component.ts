import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltSliderModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSliderModule
  ],
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  value = 22;
}
