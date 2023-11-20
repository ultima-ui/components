import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultAlertOutlet]',
  exportAs: 'ultAlertOutlet'
})
export class AlertOutletDirective {
  @Input('ultAlertOutlet') templateRef!: TemplateRef<any>;
}
