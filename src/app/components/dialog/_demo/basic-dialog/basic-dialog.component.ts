import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltDialogModule, UltButtonModule } from '@ultima-ui/components';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltDialogModule,
    UltButtonModule
  ],
  templateUrl: './basic-dialog.component.html'
})
export class BasicDialogComponent {
  private _dialogRef = inject(DialogRef);

  close() {
    this._dialogRef.close();
  }
}
