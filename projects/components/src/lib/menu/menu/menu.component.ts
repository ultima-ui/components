import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { MENU_TRIGGER, MenuTriggerFor } from '../menu-trigger-for';
import { Menu, MENU } from '../menu.properties';
import { MENU_STACK } from '../menu-stack';

let nextId = 0;

@Component({
  selector: 'ult-menu',
  exportAs: 'ultMenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    {
      provide: MENU,
      useExisting: forwardRef(() => MenuComponent),
      multi: false
    }
  ],
  host: {
    'class': 'ult-menu',
    '[class.is-nested]': 'isNested',
  }
})
export class MenuComponent implements Menu, OnDestroy {
  private _menuStack = inject(MENU_STACK);
  private _parentTrigger = inject(MENU_TRIGGER, { optional: true });
  readonly id = `ult-menu-${nextId++}`;

  isNested = false;

  @ContentChildren(MenuTriggerFor, { descendants: true }) triggers!: QueryList<MenuTriggerFor>;
  @Output() readonly closed: EventEmitter<void> = new EventEmitter();

  readonly orientation = 'vertical';

  constructor() {
    this.isNested = !this._menuStack.isEmpty();
    this._parentTrigger?.registerChildMenu(this);
    this._menuStack.add(this);
  }

  readonly nativeElement: HTMLElement = inject(ElementRef).nativeElement;

  ngOnDestroy() {
    this._parentTrigger?.registerChildMenu(null);
    this._menuStack.delete(this);
  }
}
