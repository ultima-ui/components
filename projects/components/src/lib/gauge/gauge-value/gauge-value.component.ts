import { Component } from '@angular/core';

@Component({
  selector: 'ult-gauge-value',
  exportAs: 'ultGaugeValue',
  templateUrl: './gauge-value.component.html',
  styleUrls: ['./gauge-value.component.css'],
  host: {
    'class': 'ult-gauge-value'
  }
})
export class GaugeValueComponent {
}
