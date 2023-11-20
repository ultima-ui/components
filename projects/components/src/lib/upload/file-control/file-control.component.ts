import { Component } from '@angular/core';

@Component({
  selector: 'ult-file-control,[ult-file-control]',
  exportAs: 'ultFileControl',
  templateUrl: './file-control.component.html',
  styleUrls: ['./file-control.component.css'],
  host: {
    'class': 'ult-file-control'
  }
})
export class FileControlComponent {
}
