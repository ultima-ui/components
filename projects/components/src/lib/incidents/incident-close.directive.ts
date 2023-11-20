import { Directive } from '@angular/core';

@Directive({
  selector: '[ultIncidentClose]',
  exportAs: 'ultIncidentClose',
  host: {
    'class': 'ult-incident-close'
  }
})
export class IncidentCloseDirective {
}
