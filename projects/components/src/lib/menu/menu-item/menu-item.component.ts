import { Component, ContentChild, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { MENU_STACK } from '../menu-stack';
import { MENU_TRIGGER } from '../menu-trigger-for';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directionality } from '@angular/cdk/bidi';
import { MenuItemIconDirective } from '../menu-item-icon.directive';
import { MenuItemCheckIconDirective } from '../menu-item-check-icon.directive';
import { MenuTriggerIconDirective } from '../menu-trigger-icon.directive';

@Component({
  selector: 'ult-menu-item,[ult-menu-item],[ultMenuItem]',
  exportAs: 'ultMenuItem',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  host: {
    'class': 'ult-menu-item',
    '[class.is-disabled]': 'disabled',
    '[class.is-selected]': 'selected',
  }
})
export class MenuItemComponent {
  protected readonly _dir = inject(Directionality, { optional: true });
  private readonly _menuStack = inject(MENU_STACK);
  private readonly _menuTrigger = inject(MENU_TRIGGER, { optional: true, self: true });
  readonly _elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  @ContentChild(MenuItemIconDirective)
  readonly iconRef!: MenuItemIconDirective;

  @ContentChild(MenuItemCheckIconDirective)
  readonly checkIconRef!: MenuItemCheckIconDirective;

  @ContentChild(MenuTriggerIconDirective)
  readonly triggerIconRef!: MenuTriggerIconDirective;

  @Input()
  keepOpen = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get selected(): boolean {
    return this._selected;
  }
  set selected(value: BooleanInput) {
    this._selected = coerceBooleanProperty(value);
  }
  private _selected = false;

  @Output()
  readonly triggered = new EventEmitter<void>();

  constructor() {
    this._setType();
  }

  trigger(options?: { keepOpen: boolean }) {
    const hasTrigger = this._elementRef.nativeElement.classList.contains('ult-menu-trigger-for');

    if (this._disabled || hasTrigger) {
      return;
    }

    this.triggered.next();

    if (options?.keepOpen || this.keepOpen) {
      return;
    }

    this._menuStack.closeAll();
  }

  @HostListener('click', ['$event'])
  private _handleClick() {
    this.trigger();
  }

  @HostListener('mouseenter', ['$event'])
  private _handleMouseEnter(event: PointerEvent) {
    const isMenuOpen = this._elementRef.nativeElement.hasAttribute('ult-menu-is-open');

    if (!isMenuOpen) {
      this._menuTrigger?.getMenu()?.triggers.forEach(menuTrigger => {
        menuTrigger.api.close();
      });
    }
  }

  /** Sets the `type` attribute of the menu item. */
  private _setType() {
    const element = this._elementRef.nativeElement;

    if (element.nodeName === 'BUTTON' && !element.getAttribute('type')) {
      // Prevent form submissions.
      element.setAttribute('type', 'button');
    }
  }
}
