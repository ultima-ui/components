import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltButtonModule, UltSpinnerModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSpinnerModule,
    UltButtonModule
  ],
  templateUrl: './overview.component.html'
})
export class OverviewComponent {

}
