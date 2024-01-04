import { Component } from '@angular/core';

@Component({
  selector: 'ult-expand-button,[ult-expand-button]',
  exportAs: 'ultExpandButton',
  templateUrl: './expand-button.component.html',
  styleUrl: './expand-button.component.css',
  host: {
    'class': 'ult-expand-button'
  }
})
export class ExpandButtonComponent {
}
