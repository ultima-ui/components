import { Directive } from '@angular/core';

@Directive({
  selector: '[ultIncidentIcon]',
  exportAs: 'ultIncidentIcon',
  host: {
    'class': 'ult-incident-icon'
  }
})
export class IncidentIconDirective {
}
