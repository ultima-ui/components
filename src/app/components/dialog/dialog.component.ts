import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltButtonModule, UltDialogModule, DialogManager } from '@ultima-ui/components';
import { BasicDialogComponent } from './_demo/basic-dialog/basic-dialog.component';
import { FormDialogComponent } from './_demo/form-dialog/form-dialog.component';
import {
  NegativeConfirmationDialogComponent
} from './_demo/negative-confirmation-dialog/negative-confirmation-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { ScrollBodyDialog } from './_demo/scroll-body/scroll-body.dialog';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltButtonModule,
    UltDialogModule,
    CodeBlockComponent,
    CodeExampleModule,
    InlineCodeDirective,
    PlaygroundModule
  ],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  private _dialogManager = inject(DialogManager);
  templateDialogRef!: DialogRef;
  importModule = `import { UltDialogModule, DialogManager } from '@ultima-ui/components';`;

  openBasicDialog() {
    const dialogRef = this._dialogManager.open(BasicDialogComponent, {
      width: '600px'
    });
  }

  openFormDialog() {
    const dialogRef = this._dialogManager.open(FormDialogComponent, {
      autoFocus: true,
      width: '600px'
    });
  }

  openNegativeConfirmationDialog() {
    const dialogRef = this._dialogManager.open(NegativeConfirmationDialogComponent, {
      width: '600px'
    });
  }

  openTemplateDialog(templateRef: TemplateRef<any>) {
    this.templateDialogRef = this._dialogManager.open(templateRef, {
      width: '500px'
    });
  }

  openScrollBodyDialog() {
    const dialogRef = this._dialogManager.open(ScrollBodyDialog, {
      width: '1200px'
    });
  }
}
