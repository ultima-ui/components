import { Component, Input } from '@angular/core';

@Component({
  selector: 'ult-segmented',
  exportAs: 'ultSegmented',
  templateUrl: './segmented.component.html',
  styleUrl: './segmented.component.css',
  host: {
    'class': 'ult-segmented'
  }
})
export class SegmentedComponent {
  @Input()
  selectedValue: string;
}
