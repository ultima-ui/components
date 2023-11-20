import { Component } from '@angular/core';

@Component({
  selector: 'ult-error',
  exportAs: 'ultError',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  host: {
    'class': 'ult-error'
  }
})
export class ErrorComponent {
}
