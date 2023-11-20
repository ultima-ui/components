import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltDialogModule, UltButtonModule } from '@ultima-ui/components';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-negative-confirmation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    UltDialogModule,
    UltButtonModule
  ],
  templateUrl: './negative-confirmation-dialog.component.html',
  styleUrls: ['./negative-confirmation-dialog.component.css']
})
export class NegativeConfirmationDialogComponent {
  private _dialogRef = inject(DialogRef);
  deleting = false;

  close() {
    this._dialogRef.close();
  }
}
