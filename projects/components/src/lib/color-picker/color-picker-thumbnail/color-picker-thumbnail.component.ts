import { Component, ElementRef, inject, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ult-color-picker-thumbnail,[ult-color-picker-thumbnail]',
  exportAs: 'ultColorPickerThumbnail',
  templateUrl: './color-picker-thumbnail.component.html',
  styleUrls: ['./color-picker-thumbnail.component.css'],
  host: {
    'class': 'ult-color-picker-thumbnail'
  }
})
export class ColorPickerThumbnailComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  color: string;

  ngOnChanges(changes: SimpleChanges) {
    if (!this.color) {
      return;
    }

    this._elementRef.nativeElement.style.setProperty('--ult-color-picker-thumbnail-bg', this.color);
  }
}
