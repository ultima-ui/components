import { Directive, HostListener, inject, TemplateRef } from '@angular/core';
import { CHIP } from './properties';
import { ChipComponent } from './chip/chip.component';

@Directive({
  selector: '[ultChipCloseIcon]',
  exportAs: 'ultChipCloseIcon',
  host: {
    'class': 'ult-chip-close-icon'
  }
})
export class ChipCloseIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
  private _chip = inject<ChipComponent>(CHIP);

  @HostListener('click')
  private _handleClick() {
    this._chip.api.close();
  }
}
