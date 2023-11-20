import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Input,
  NgZone,
  numberAttribute,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ult-resizable-container',
  exportAs: 'ultResizableContainer',
  templateUrl: './resizable-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'ult-resizable-container'
  }
})
export class ResizableContainerComponent implements OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);
  private _cdr = inject(ChangeDetectorRef);
  private _ngZone = inject(NgZone);
  private _destroyRef = inject(DestroyRef);
  private _document = inject(DOCUMENT);
  private _resizing = false;
  private _maxWidth: number;
  private _clientX: number;

  @ViewChild('handler', { static: true }) handlerRef: ElementRef;

  @Input({ transform: numberAttribute }) minWidth = 0;

  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(this.handlerRef.nativeElement, 'mousedown')
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe((event: MouseEvent) => {
          this._resizing = true;

          if (!this._maxWidth) {
            this._maxWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            this._clientX = event.clientX;
          }

          this._cdr.detectChanges();
        })
      ;
      fromEvent<MouseEvent>(this._document, 'mousemove')
        .pipe(
          throttleTime(5),
          takeUntilDestroyed(this._destroyRef)
        )
        .subscribe((event: MouseEvent) => {
          if (this._resizing) {
            let width = this._maxWidth - (this._clientX - event.clientX);

            if (width <= this.minWidth) {
              width = this.minWidth;
            } else if (width >= this._maxWidth) {
              width = this._maxWidth;
            }

            this._renderer.setStyle(this._elementRef.nativeElement, 'width', width + 'px');
          }
        })
      ;
      fromEvent(this._document, 'mouseup')
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(event => {
          this._resizing = false;
          this._cdr.detectChanges();
        })
      ;
    });
  }
}
