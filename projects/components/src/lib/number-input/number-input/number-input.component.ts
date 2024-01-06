import { Component } from '@angular/core';

@Component({
  selector: 'ult-number-input',
  exportAs: 'ultNumberInput',
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css',
  host: {
    'class': 'ult-number-input'
  }
})
export class NumberInputComponent {
}
