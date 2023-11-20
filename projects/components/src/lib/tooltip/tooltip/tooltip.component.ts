import { Component, inject, TemplateRef } from '@angular/core';
import { TOOLTIP_DATA } from '../tooltip.properties';

@Component({
  selector: 'ult-tooltip',
  exportAs: 'ult-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  host: {
    'class': 'ult-tooltip'
  }
})
export class TooltipComponent {
  readonly _data = inject<any>(TOOLTIP_DATA);

  get isDataTemplateRef(): boolean {
    return this._data instanceof TemplateRef;
  }
}
