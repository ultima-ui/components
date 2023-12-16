import { Directive } from '@angular/core';

@Directive({
  selector: '[ultSegmentedIcon]',
  exportAs: 'ultSegmentedIcon',
  host: {
    'class': 'ult-segmented-icon'
  }
})
export class SegmentedIconDirective {
}
