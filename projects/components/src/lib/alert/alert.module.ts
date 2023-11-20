import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertOutletDirective } from './alert-outlet.directive';
import { AlertCloseDirective } from './alert-close.directive';
import { AlertTitleDirective } from './alert-title.directive';
import { AlertIconDirective } from './alert-icon.directive';

@NgModule({
  declarations: [
    AlertComponent,
    AlertOutletDirective,
    AlertCloseDirective,
    AlertTitleDirective,
    AlertIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    AlertOutletDirective,
    AlertCloseDirective,
    AlertTitleDirective,
    AlertIconDirective
  ]
})
export class UltAlertModule { }
