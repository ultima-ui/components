import { InjectionToken, QueryList } from '@angular/core';
import { MenuTriggerFor } from './menu-trigger-for';

export const MENU = new InjectionToken<Menu>('ult-menu');

export interface Menu {
  /** The id of the menu's host element. */
  id: string;

  /** The menu's native DOM host element. */
  nativeElement: HTMLElement;

  /** The direction items in the menu flow. */
  readonly orientation: 'horizontal' | 'vertical';
  readonly triggers: QueryList<MenuTriggerFor>;
}

export type MenuPosition = 'below-start' | 'below-center' | 'below-end' |
  'above-start' | 'above-center' | 'above-end' |
  'before-start' | 'before-center' | 'before-end' |
  'after-start' | 'after-center' | 'after-end' | string
;
