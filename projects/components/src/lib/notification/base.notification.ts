import { DestroyRef, ElementRef, inject, Renderer2 } from '@angular/core';
import { filter, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NOTIFICATION_REF } from './types';
import { NotificationRef } from './notification-ref';

export class BaseNotification {
  private _notificationRef = inject<NotificationRef>(NOTIFICATION_REF);
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
    const position = this._notificationRef.position;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-notification-position', position);
    this._closeTimeout = setTimeout(() => {
      this._close();
    }, this._notificationRef.duration);
    fromEvent(this._elementRef.nativeElement, 'animationend')
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        filter(() => this.closed)
      )
      .subscribe(() => {
        this._notificationRef?.close();
      })
    ;
  }

  protected _ngOnDestroy() {
    clearTimeout(this._closeTimeout);
    this._notificationRef?.close();
  }

  private _close() {
    this.closed = true;
  }
}
