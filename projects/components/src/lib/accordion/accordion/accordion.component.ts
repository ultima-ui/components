import { Component, Input } from '@angular/core';
import { ULT_ACCORDION } from '../accordion.properties';

let nextId = 0;

@Component({
  selector: 'ult-accordion',
  exportAs: 'ultAccordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [
    {
      provide: ULT_ACCORDION,
      useExisting: AccordionComponent
    }
  ],
  host: {
    'class': 'ult-accordion'
  }
})
export class AccordionComponent {
  readonly id = 'ult-accordion-' + nextId++;

  @Input() multiple = false;
}
