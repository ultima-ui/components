import { Directive } from '@angular/core';

@Directive({
  selector: '[ultLayoutBodyMinHeight]',
  host: {
    'class': 'ult-layout-body-min-height'
  }
})
export class LayoutBodyMinHeightDirective {
}
