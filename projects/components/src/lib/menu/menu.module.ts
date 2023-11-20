import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { MenuSeparatorComponent } from './menu-separator/menu-separator.component';
import { MenuComponent } from './menu/menu.component';
import { MenuTriggerFor } from './menu-trigger-for';
import { MenuHeadingComponent } from './menu-heading/menu-heading.component';
import { MenuItemIconDirective } from './menu-item-icon.directive';
import { MenuItemCheckIconDirective } from './menu-item-check-icon.directive';
import { MenuTriggerIconDirective } from './menu-trigger-icon.directive';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuGroupComponent,
    MenuSeparatorComponent,
    MenuComponent,
    MenuTriggerFor,
    MenuHeadingComponent,
    MenuItemIconDirective,
    MenuItemCheckIconDirective,
    MenuTriggerIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuItemComponent,
    MenuGroupComponent,
    MenuSeparatorComponent,
    MenuComponent,
    MenuTriggerFor,
    MenuHeadingComponent,
    MenuItemIconDirective,
    MenuItemCheckIconDirective,
    MenuTriggerIconDirective
  ]
})
export class UltMenuModule { }
