import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogManager } from './dialog-manager';
import { DialogTriggerForDirective } from './dialog-trigger-for.directive';

@NgModule({
  declarations: [
    DialogComponent,
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogTriggerForDirective
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    DialogComponent,
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogTriggerForDirective
  ],
  providers: [
    DialogManager
  ]
})
export class UltDialogModule { }
