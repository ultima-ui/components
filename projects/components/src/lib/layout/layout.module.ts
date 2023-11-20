import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutTopbarComponent } from './layout-topbar/layout-topbar.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LayoutAsideComponent } from './layout-aside/layout-aside.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSubheaderComponent } from './layout-subheader/layout-subheader.component';
import { LayoutBodyComponent } from './layout-body/layout-body.component';
import { LayoutBodyHeightDirective } from './layout-body-height.directive';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutTopHeaderComponent } from './layout-top-header/layout-top-header.component';
import { LayoutBodyMinHeightDirective } from './layout-body-min-height.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutTopbarComponent,
    LayoutSidebarComponent,
    LayoutAsideComponent,
    LayoutHeaderComponent,
    LayoutSubheaderComponent,
    LayoutBodyComponent,
    LayoutBodyHeightDirective,
    LayoutBodyMinHeightDirective,
    LayoutFooterComponent,
    LayoutTopHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    LayoutTopbarComponent,
    LayoutSidebarComponent,
    LayoutAsideComponent,
    LayoutHeaderComponent,
    LayoutSubheaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent,
    LayoutBodyHeightDirective,
    LayoutBodyMinHeightDirective,
    LayoutTopHeaderComponent
  ]
})
export class UltLayoutModule { }
