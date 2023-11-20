import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltLayoutModule,
  UltPanelModule,
  UltSidebarModule,
  UltIconModule
} from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSidebarModule,
    UltLayoutModule,
    UltPanelModule,
    UltIconModule
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
}
