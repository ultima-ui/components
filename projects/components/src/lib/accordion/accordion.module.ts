import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemHeaderComponent } from './accordion-item-header/accordion-item-header.component';
import { AccordionItemBodyComponent } from './accordion-item-body/accordion-item-body.component';
import { AccordionItemToggleIconDirective } from './accordion-item-toggle-icon.directive';


@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeaderComponent,
    AccordionItemBodyComponent,
    AccordionItemToggleIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemHeaderComponent,
    AccordionItemBodyComponent,
    AccordionItemToggleIconDirective
  ]
})
export class UltAccordionModule { }
