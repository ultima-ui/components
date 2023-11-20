import {
  afterNextRender,
  Component,
  ElementRef,
  inject, Input,
  QueryList
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ult-options',
  exportAs: 'ultOptions',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  host: {
    'class': 'ult-options'
  }
})
export class OptionsComponent {
  private _elementRef = inject(ElementRef);

  @Input() options: QueryList<any>;

  private _window: any;
  private _document = inject(DOCUMENT);
  private readonly _requestAnimationFrame: any;

  constructor() {
    this._window = this._document.defaultView;
    this._requestAnimationFrame = this._getRequestAnimationFrame();

    afterNextRender(() => {
      if (!this._requestAnimationFrame) {
        this._scrollIntoView();
        return;
      }

      this._requestAnimationFrame(() => this._scrollIntoView());
    });
  }

  private _scrollIntoView() {
    this.options.forEach(option => {
      if (option.api.isSelected()) {
        const parentElement = this._elementRef.nativeElement;
        const itemElement = option.api.nativeElement();

        if (!this._isScrolledIntoView(itemElement, parentElement)) {
          const parentRect = parentElement.getBoundingClientRect();
          const elementRect = itemElement.getBoundingClientRect();
          parentElement.scrollTop = elementRect.bottom - parentRect.height / 2;
        }
      }
    });
  }

  private _isScrolledIntoView(element: HTMLElement, parent: HTMLElement) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return (elementRect.top >= 0) && (elementRect.bottom <= parentRect.height);
  }

  private _getRequestAnimationFrame(): () => void {
    return this._window.requestAnimationFrame ||
      this._window.webkitRequestAnimationFrame ||
      this._window.mozRequestAnimationFrame ||
      this._window.oRequestAnimationFrame ||
      this._window.msRequestAnimationFrame;
  }
}
