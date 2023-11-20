import { Component } from '@angular/core';

@Component({
  selector: 'ult-file-list',
  exportAs: 'ultFileList',
  templateUrl: './file-list.component.html',
  styleUrls: ['file-list.component.css'],
  host: {
    'class': 'ult-file-list'
  }
})
export class FileListComponent {
}
