import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltGaugeModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltGaugeModule
  ],
  templateUrl: './gauge.component.html'
})
export class GaugeComponent {

}
