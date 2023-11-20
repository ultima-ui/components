import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltButtonModule, UltDialogModule } from '@ultima-ui/components';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  standalone: true,
  imports: [CommonModule, UltButtonModule, UltDialogModule],
  templateUrl: './scroll-body.dialog.html'
})
export class ScrollBodyDialog {
  private _dialogRef = inject(DialogRef);

  close() {
    this._dialogRef.close();
  }
}
