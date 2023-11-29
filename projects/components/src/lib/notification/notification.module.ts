import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';
import { ContainerComponent } from './container/container.component';
import { ToastCloseDirective } from './toast-close.directive';
import { ToastIconDirective } from './toast-icon.directive';
import { ToastComponent } from './toast/toast.component';
import { NotificationCloseDirective } from './notification-close.directive';

@NgModule({
  declarations: [
    NotificationComponent,
    ToastComponent,
    ContainerComponent,
    ToastIconDirective,
    ToastCloseDirective,
    NotificationCloseDirective
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    NotificationComponent,
    ToastComponent,
    ToastIconDirective,
    ToastCloseDirective,
    NotificationCloseDirective
  ],
  providers: [
    NotificationService
  ]
})
export class UltNotificationModule { }
