import { Directive, HostListener, inject } from '@angular/core';
import { ULT_TOAST_COMPONENT_REF } from './types';
import { ToastComponent } from './toast/toast.component';

@Directive({
  selector: '[ultToastClose]',
  exportAs: 'ultToastClose'
})
export class ToastCloseDirective {
  private _toast = inject<ToastComponent>(ULT_TOAST_COMPONENT_REF);

  @HostListener('click')
  private _handleClick() {
    this._toast.api.close();
  }
}
