import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseNotification } from '../base.notification';
import { ULT_NOTIFICATION_COMPONENT_REF } from '../types';

@Component({
  selector: 'ult-notification',
  exportAs: 'ultNotification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [
    {
      provide: ULT_NOTIFICATION_COMPONENT_REF,
      useExisting: NotificationComponent
    }
  ],
  host: {
    'class': 'ult-notification',
    '[class.closed]': 'closed',
  }
})
export class NotificationComponent extends BaseNotification implements OnInit, OnDestroy {
  ngOnInit() {
    this._ngOnInit();
  }

  ngOnDestroy() {
    this._ngOnDestroy();
  }
}
