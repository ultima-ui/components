import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';
import { ContainerComponent } from './container/container.component';
import { PortalModule } from '@angular/cdk/portal';
import { NotificationCloseDirective } from './notification-close.directive';
import { NotificationIconDirective } from './notification-icon.directive';

@NgModule({
  declarations: [
    NotificationComponent,
    ContainerComponent,
    NotificationIconDirective,
    NotificationCloseDirective,
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    NotificationComponent,
    NotificationIconDirective,
    NotificationCloseDirective
  ],
  providers: [
    NotificationService
  ]
})
export class UltNotificationModule { }
