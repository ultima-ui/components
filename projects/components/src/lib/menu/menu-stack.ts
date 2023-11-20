import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
import { Menu } from './menu.properties';
import { MenuTriggerFor } from './menu-trigger-for';

export const MENU_STACK = new InjectionToken<MenuStack>('ult-menu-stack');
export const PARENT_OR_NEW_MENU_STACK_PROVIDER = {
  provide: MENU_STACK,
  deps: [[new Optional(), new SkipSelf(), new Inject(MENU_STACK)]],
  useFactory: (parentMenuStack?: MenuStack) => parentMenuStack || new MenuStack(),
};

@Injectable()
export class MenuStack {
  private _elements: Menu[] = [];
  private _triggers: MenuTriggerFor[] = [];

  add(menu: Menu) {
    this._elements.push(menu);
  }

  delete(menu: Menu) {
    this._elements.splice(this._elements.findIndex(element => element.id === menu.id), 1);
  }

  isEmpty(): boolean {
    return this._elements.length === 0;
  }

  registerTrigger(menuTrigger: MenuTriggerFor) {
    this._triggers.push(menuTrigger);
  }

  unregisterTrigger(menuTrigger: MenuTriggerFor) {
    this._triggers.splice(this._triggers.findIndex(element => element === menuTrigger), 1);
  }

  closeAll() {
    this._triggers.forEach(trigger => {
      trigger.api.close();
    });
  }

  isTargetInsideInTriggersOrInMenu(target: Element) {
    let isInside = false;

    this._triggers.forEach(trigger => {
      if ((trigger.getElement() === target || trigger.getElement().contains(target)) && !isInside) {
        isInside = true;
      }
    });

    if (!isInside) {
      this._elements.forEach(menu => {
        if ((menu.nativeElement === target || menu.nativeElement.contains(target)) && !isInside) {
          isInside = true;
        }
      });
    }

    return isInside;
  }
}
