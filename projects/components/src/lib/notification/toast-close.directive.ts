import { Directive, HostListener, inject } from '@angular/core';
import { ULT_NOTIFICATION_COMPONENT_REF } from './types';
import { ToastComponent } from './toast/toast.component';

@Directive({
  selector: '[ultToastClose]',
  exportAs: 'ultToastClose'
})
export class ToastCloseDirective {
  private _notification = inject<ToastComponent>(ULT_NOTIFICATION_COMPONENT_REF);

  @HostListener('click')
  private _handleClick() {
    this._notification.api.close();
  }
}
