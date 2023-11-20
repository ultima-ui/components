import { Directive, HostListener, inject, TemplateRef } from '@angular/core';
import { SelectComponent } from './select/select.component';
import { ULT_SELECT } from './select.properties';

@Directive({
  selector: '[ultSelectClearIcon]',
  exportAs: 'ultSelectClearIcon',
  host: {
    'class': 'ult-select-clear-icon'
  }
})
export class SelectClearIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
  private _select = inject<SelectComponent>(ULT_SELECT, { skipSelf: true });

  @HostListener('click', ['$event'])
  private _handleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._select.api.clear();
  }
}
