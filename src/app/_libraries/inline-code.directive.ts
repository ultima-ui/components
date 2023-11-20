import { Directive } from '@angular/core';

@Directive({
  selector: '[inlineCode]',
  standalone: true,
  host: {
    class: 'text-sm text-primary-500'
  }
})
export class InlineCodeDirective {

  constructor() { }

}
