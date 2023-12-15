import { Component, HostListener, inject, Input } from '@angular/core';
import { ULT_SEGMENTED } from '../types';
import { SegmentedComponent } from '../segmented/segmented.component';

@Component({
  selector: 'ult-segmented-button,[ult-segmented-button]',
  exportAs: 'ultSegmentedButton',
  templateUrl: './segmented-button.component.html',
  styleUrl: './segmented-button.component.css',
  host: {
    'class': 'ult-segmented-button',
    '[class.is-selected]': '_isSelected',
  }
})
export class SegmentedButtonComponent {
  readonly _segmented = inject<SegmentedComponent>(ULT_SEGMENTED, { skipSelf: true });

  @Input({ required: true })
  value: any;

  get _isSelected() {
    return this._segmented.api.isSelected(this.value);
  }

  get api() {
    return {
      isSelected: () => this._isSelected
    }
  }

  @HostListener('click')
  private _handleClick() {
    this._segmented.api.select(this.value);
  }
}
