import { booleanAttribute, Component, HostListener, inject, Input } from '@angular/core';
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
    '[class.is-disabled]': 'disabled'
  }
})
export class SegmentedButtonComponent {
  readonly _segmented = inject<SegmentedComponent>(ULT_SEGMENTED, { skipSelf: true });

  @Input({ required: true })
  value: any;

  @Input({ transform: booleanAttribute })
  disabled = false;

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
