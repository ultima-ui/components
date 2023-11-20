import { Directive } from '@angular/core';

@Directive({
  selector: '[ultButtonIcon]',
  exportAs: 'ultButtonIcon',
  host: {
    'class': 'icon'
  }
})
export class ButtonIconDirective {
}
