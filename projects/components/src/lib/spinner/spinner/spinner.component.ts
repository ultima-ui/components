import { Component, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonSize } from '../../button/properties';

@Component({
  selector: 'ult-spinner',
  exportAs: 'ultSpinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['spinner.component.css'],
  host: {
    'class': 'ult-spinner'
  }
})
export class SpinnerComponent implements OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @Input()
  set size(size: ButtonSize) {
    this._size = size;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'spinner-size', this._size);
  }
  private _size = 'default';

  ngOnInit() {
    if (!this._elementRef.nativeElement.hasAttribute('spinner-size')) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'spinner-size', this._size);
    }
  }
}
