import { Component, ContentChild, HostListener, inject } from '@angular/core';
import { ULT_ACCORDION_ITEM } from '../accordion.properties';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { AccordionItemToggleIconDirective } from '../accordion-item-toggle-icon.directive';

@Component({
  selector: 'ult-accordion-item-header',
  exportAs: 'ultAccordionItemHeader',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.css'],
  host: {
    'class': 'ult-accordion-item-header'
  }
})
export class AccordionItemHeaderComponent {
  private _accordionItem = inject<AccordionItemComponent | null>(ULT_ACCORDION_ITEM, { optional: true, skipSelf: true });

  @ContentChild(AccordionItemToggleIconDirective) toggleRef!: AccordionItemToggleIconDirective;

  @HostListener('click')
  private _handleToggle() {
    this._accordionItem?.api.toggle();
  }
}
