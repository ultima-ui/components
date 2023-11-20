import { Component, DestroyRef, EventEmitter, HostListener, inject, Input, Output, Renderer2 } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { UploadSelectedEvent } from '../properties';

@Component({
  selector: 'ult-upload-area',
  exportAs: 'ultUploadArea',
  templateUrl: './upload-area.component.html',
  styleUrls: ['./upload-area.component.css'],
  host: {
    'class': 'ult-upload-area',
    '[class.is-dragenter]': 'dragenter',
  }
})
export class UploadAreaComponent {
  protected _renderer = inject(Renderer2);
  private _destroyRef = inject(DestroyRef);

  @Input() accept!: string;
  @Input()
  set multiple(value: BooleanInput) {
    this._multiple = coerceBooleanProperty(value);
  }
  get multiple(): boolean {
    return this._multiple;
  }
  private _multiple = false;

  @Output() readonly selected = new EventEmitter<UploadSelectedEvent>();

  dragenter = false;

  @HostListener('dragover', ['$event'])
  private _handleDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  private _handleDragEnter(event: any) {
    this.dragenter = true;
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  private _handleDragLeave(event: any) {
    this.dragenter = false;
    event.preventDefault();
  }

  @HostListener('dragend', ['$event'])
  private _handleDragEnd(event: any) {
    this.dragenter = false;
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  private _handleDrop(event: DragEvent) {
    event.preventDefault();
    this.dragenter = false;

    if (event.dataTransfer) {
      const files: File[] = [];

      if (files) {
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
          files.push(event.dataTransfer.files[i]);
        }
      }

      this.selected.emit({
        multiple: this.multiple,
        fileList: event.dataTransfer.files,
        event,
        files
      });
    }
  }
}
