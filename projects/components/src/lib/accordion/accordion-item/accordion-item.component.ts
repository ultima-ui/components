import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ULT_ACCORDION, ULT_ACCORDION_ITEM } from '../accordion.properties';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher, UniqueSelectionDispatcherListener } from '@angular/cdk/collections';
import { AccordionComponent } from '../accordion/accordion.component';

let nextId = 0;

@Component({
  selector: 'ult-accordion-item',
  exportAs: 'ultAccordionItem',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  providers: [
    {
      provide: ULT_ACCORDION,
      useValue: undefined
    },
    {
      provide: ULT_ACCORDION_ITEM,
      useExisting: AccordionItemComponent
    }
  ],
  host: {
    'class': 'ult-accordion-item',
    '[class.is-expanded]': 'expanded',
    '[class.is-disabled]': 'disabled'
  }
})
export class AccordionItemComponent {
  readonly id = 'ult-accordion-item-' + nextId++;
  private _accordion = inject<AccordionComponent | null>(ULT_ACCORDION, { optional: true, skipSelf: true });
  private _expansionDispatcher = inject(UniqueSelectionDispatcher);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  @Input()
  get expanded(): boolean {
    return this._expanded;
  }
  set expanded(expanded: BooleanInput) {
    expanded = coerceBooleanProperty(expanded);

    // Only emit events and update the internal value if the value changes.
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);

      if (expanded) {
        this.opened.emit();
        const accordionId = this._accordion ? this._accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }

      this._changeDetectorRef.markForCheck();
    }
  }
  private _expanded = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(disabled: BooleanInput) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  private _disabled = false;

  private _removeUniqueSelectionListener: UniqueSelectionDispatcherListener;

  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly opened = new EventEmitter<void>();
  @Output() readonly destroyed = new EventEmitter<void>();
  @Output() readonly expandedChange = new EventEmitter<boolean>();

  get api() {
    return {
      toggle: () => this._toggle()
    };
  }

  constructor() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen(
      (id: string, accordionId: string) => {
        if (
          this._accordion &&
          !this._accordion.multiple &&
          this._accordion.id === accordionId &&
          this.id !== id
        ) {
          this.expanded = false;
        }
      },
    );
  }

  private _toggle() {
    this.expanded = !this.expanded;
  }
}
