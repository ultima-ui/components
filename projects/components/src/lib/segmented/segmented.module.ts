import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentedComponent } from './segmented/segmented.component';
import { SegmentedControlComponent } from './segmented-control/segmented-control.component';

@NgModule({
  declarations: [
    SegmentedComponent,
    SegmentedControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SegmentedComponent,
    SegmentedControlComponent
  ]
})
export class UltSegmentedModule { }
