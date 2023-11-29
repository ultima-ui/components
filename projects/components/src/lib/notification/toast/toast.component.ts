import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseNotification } from '../base.notification';
import { ULT_NOTIFICATION_COMPONENT_REF } from '../types';

@Component({
  selector: 'ult-toast',
  exportAs: 'ultToast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  providers: [
    {
      provide: ULT_NOTIFICATION_COMPONENT_REF,
      useExisting: ToastComponent
    }
  ],
  host: {
    'class': 'ult-toast',
    '[class.closed]': 'closed',
  }
})
export class ToastComponent extends BaseNotification implements OnInit, OnDestroy {
  @Input()
  set appearance(appearance: string) {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-toast-appearance', appearance);
  }

  ngOnInit() {
    this._ngOnInit();
  }

  ngOnDestroy() {
    this._ngOnDestroy();
  }
}
