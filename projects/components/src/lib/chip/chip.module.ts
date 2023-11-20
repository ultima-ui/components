import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { ChipCloseIconDirective } from './chip-close-icon.directive';

@NgModule({
  declarations: [
    ChipComponent,
    ChipCloseIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChipComponent,
    ChipCloseIconDirective
  ]
})
export class UltChipModule { }
