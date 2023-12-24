import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { ContainerComponent } from './container/container.component';
import { ToastCloseDirective } from './toast-close.directive';
import { ToastIconDirective } from './toast-icon.directive';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast.service';

@NgModule({
  declarations: [
    ToastComponent,
    ContainerComponent,
    ToastIconDirective,
    ToastCloseDirective
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    ToastComponent,
    ToastIconDirective,
    ToastCloseDirective
  ],
  providers: [
    ToastService
  ]
})
export class UltToastModule { }
