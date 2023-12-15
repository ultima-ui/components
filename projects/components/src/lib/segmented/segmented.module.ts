import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentedComponent } from './segmented/segmented.component';
import { SegmentedButtonComponent } from './segmented-button/segmented-button.component';

@NgModule({
  declarations: [
    SegmentedComponent,
    SegmentedButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SegmentedComponent,
    SegmentedButtonComponent
  ]
})
export class UltSegmentedModule { }
