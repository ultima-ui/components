import { Directive, HostListener, inject } from '@angular/core';
import { ULT_NOTIFICATION_COMPONENT_REF } from './types';
import { NotificationComponent } from './notification/notification.component';

@Directive({
  selector: '[ultNotificationClose]',
  exportAs: 'ultNotificationClose',
  host: {
    'class': 'ult-notification-close'
  }
})
export class NotificationCloseDirective {
  private _notification = inject<NotificationComponent>(ULT_NOTIFICATION_COMPONENT_REF);

  @HostListener('click')
  private _handleClick() {
    this._notification.api.close();
  }
}
