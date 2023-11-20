import {
  booleanAttribute,
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { ULT_SELECT } from '../select.properties';
import { OptionCheckIconDirective } from '../option-check-icon.directive';

@Component({
  selector: 'ult-option,[ultOption]',
  exportAs: 'ultOption',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
  host: {
    'class': 'ult-option',
    '[class.is-selected]': '_isSelected',
  }
})
export class OptionComponent {
  readonly _select = inject<SelectComponent>(ULT_SELECT, { skipSelf: true });

  @ViewChild('contentRef', { read: ElementRef, static: true })
  private _contentRef!: ElementRef<HTMLElement>;

  @Input()
  value: any;

  @Input({ transform: booleanAttribute })
  keepOpen = false;

  get _isSelected() {
    return this._select.api.isSelected(this.value);
  }

  get _checkIconRef(): OptionCheckIconDirective {
    return this._select.optionCheckIconRef;
  }

  get api() {
    return {
      isSelected: () => this._isSelected,
      nativeElement: () => this._contentRef?.nativeElement
    }
  }

  @HostListener('click')
  private _handleClick() {
    if (this._select.multiple) {
      this._select.api.toggle(this.value);
    } else {
      this._select.api.select(this.value);
    }

    if (!this.keepOpen && !this._select.multiple) {
      this._select.api.close();
    }
  }
}
