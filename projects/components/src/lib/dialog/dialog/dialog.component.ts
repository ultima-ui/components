import { Component } from '@angular/core';

@Component({
  selector: 'ult-dialog',
  exportAs: 'ultDialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  host: {
    'class': 'ult-dialog'
  }
})
export class DialogComponent {
}
