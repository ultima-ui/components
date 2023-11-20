import {
  booleanAttribute,
  Component,
  Input,
  numberAttribute,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ult-gauge',
  exportAs: 'ultGauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'],
  host: {
    'class': 'ult-gauge'
  }
})
export class GaugeComponent implements OnInit {
  @Input({ transform: numberAttribute }) value = 0;
  @Input({ transform: booleanAttribute }) showValue = true;
  @Input({ transform: numberAttribute }) strokeWidth = 10;

  strokeDasharray: string;
  initialOffset: number;
  strokeDashoffset: number;

  ngOnInit() {
    const circumference = 332; //2 * Math.PI * 53; // 2 * pi * radius
    const valueInCircumference = (this.value / 100) * circumference;
    this.strokeDasharray = `${circumference} ${circumference}`;
    this.initialOffset = circumference;
    this.strokeDashoffset = this.initialOffset - valueInCircumference;
  }
}
