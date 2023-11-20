import { Component, Input } from '@angular/core';
import { UploadFileState } from '../properties';

@Component({
  selector: 'ult-file',
  exportAs: 'ultFile',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  host: {
    'class': 'ult-file'
  }
})
export class FileComponent {
  @Input() name!: string | number;
  @Input() size!: string | unknown;
  @Input() progress!: number | unknown;
  @Input() progressingMessage!: string | unknown;
  @Input() errorMessage!: string | unknown;
  @Input() remainingTime!: string | unknown;
  @Input() state: UploadFileState = 'uploading';
}
