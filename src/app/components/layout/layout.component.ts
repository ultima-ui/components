import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltButtonModule, LayoutApi, UltLayoutModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltButtonModule,
    UltLayoutModule
  ],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  layoutApi = inject(LayoutApi);

  showSidebar() {
    this.layoutApi.showSidebar();
  }

  hideSidebar() {
    this.layoutApi.hideSidebar();
  }

  showAside() {
    this.layoutApi.showAside();
  }

  hideAside() {
    this.layoutApi.hideAside();
  }
}
