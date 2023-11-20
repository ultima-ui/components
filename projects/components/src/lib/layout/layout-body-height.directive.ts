import { Directive } from '@angular/core';

@Directive({
  selector: '[ultLayoutBodyHeight]',
  host: {
    'class': 'ult-layout-body-height'
  }
})
export class LayoutBodyHeightDirective {
}
