import { Component, DestroyRef, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NotificationRef } from '../notification-ref';
import { NOTIFICATION_REF } from '../properties';
import { filter, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ult-notification',
  exportAs: 'ultNotification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  host: {
    'class': 'ult-notification',
    '[class.closed]': 'closed',
  }
})
export class NotificationComponent implements OnInit, OnDestroy {
  private _notificationRef = inject<NotificationRef>(NOTIFICATION_REF);
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _destroyRef = inject(DestroyRef);
  private _closeTimeout: number;

  closed = false;

  @Input()
  set appearance(appearance: string) {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-notification-appearance', appearance);
  }

  get api() {
    return {
      close: () => this._close()
    }
  }

  ngOnInit() {
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

  ngOnDestroy() {
    clearTimeout(this._closeTimeout);
    this._notificationRef?.close();
  }

  private _close() {
    this.closed = true;
  }
}
