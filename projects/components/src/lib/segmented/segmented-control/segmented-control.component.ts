import { Component, Input } from '@angular/core';

@Component({
  selector: 'ult-segmented-control',
  exportAs: 'ultSegmentedControl',
  templateUrl: './segmented-control.component.html',
  styleUrl: './segmented-control.component.css'
})
export class SegmentedControlComponent {
  @Input({ required: true })
  value: string;
}
