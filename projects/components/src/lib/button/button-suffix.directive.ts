import { Directive } from '@angular/core';

@Directive({
  selector: '[ultButtonSuffix]',
  exportAs: 'ultButtonSuffix',
  host: {
    'class': 'suffix'
  }
})
export class ButtonSuffixDirective {
}
