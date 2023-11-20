import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarItemTextComponent } from './sidebar-item-text/sidebar-item-text.component';
import { SidebarAsideComponent } from './sidebar-aside/sidebar-aside.component';
import { SidebarAsideContentDirective } from './sidebar-aside-content.directive';
import { SidebarItemIconDirective } from './sidebar-item-icon.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    SidebarItemComponent,
    SidebarNavComponent,
    SidebarItemTextComponent,
    SidebarAsideComponent,
    SidebarAsideContentDirective,
    SidebarItemIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    SidebarItemComponent,
    SidebarNavComponent,
    SidebarItemTextComponent,
    SidebarAsideComponent,
    SidebarAsideContentDirective,
    SidebarItemIconDirective
  ]
})
export class UltSidebarModule {
}
