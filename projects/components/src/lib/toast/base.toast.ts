import { DestroyRef, ElementRef, inject, Renderer2 } from '@angular/core';
import { filter, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TOAST_REF } from './types';
import { ToastRef } from './toast-ref';

export class BaseToast {
  private _toastRef = inject<ToastRef>(TOAST_REF);
  private _destroyRef = inject(DestroyRef);
  private _closeTimeout: number;
  protected _renderer = inject(Renderer2);
  protected _elementRef = inject(ElementRef);

  closed = false;

  get api() {
    return {
      close: () => this._close()
    }
  }

  protected _ngOnInit() {
    const position = this._toastRef.position;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-toast-position', position);
    this._closeTimeout = setTimeout(() => {
      this._close();
    }, this._toastRef.duration);
    fromEvent(this._elementRef.nativeElement, 'animationend')
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        filter(() => this.closed)
      )
      .subscribe(() => {
        this._toastRef?.close();
      })
    ;
  }

  protected _ngOnDestroy() {
    clearTimeout(this._closeTimeout);
    this._toastRef?.close();
  }

  private _close() {
    this.closed = true;
  }
}
