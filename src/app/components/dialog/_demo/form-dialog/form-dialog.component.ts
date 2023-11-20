import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltDialogModule, UltButtonModule, UltFormsModule } from '@ultima-ui/components';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    UltDialogModule,
    UltFormsModule,
    UltButtonModule
  ],
  templateUrl: './form-dialog.component.html'
})
export class FormDialogComponent {
  private _dialogRef = inject(DialogRef);

  close() {
    this._dialogRef.close();
  }
}
