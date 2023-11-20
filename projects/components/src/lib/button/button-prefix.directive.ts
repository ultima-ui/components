import { Directive } from '@angular/core';

@Directive({
  selector: '[ultButtonPrefix]',
  exportAs: 'ultButtonPrefix',
  host: {
    'class': 'prefix'
  }
})
export class ButtonPrefixDirective {
}
