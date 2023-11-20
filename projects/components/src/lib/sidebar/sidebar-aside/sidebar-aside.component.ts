import { Component } from '@angular/core';
import { SIDEBAR_ASIDE } from '../types';

@Component({
  selector: 'ult-sidebar-aside',
  exportAs: 'ultSidebarAside',
  templateUrl: './sidebar-aside.component.html',
  styleUrls: ['./sidebar-aside.component.css'],
  providers: [
    {
      provide: SIDEBAR_ASIDE,
      useExisting: SidebarAsideComponent
    }
  ],
  host: {
    'class': 'ult-sidebar-aside'
  }
})
export class SidebarAsideComponent {
  nextId = 0;
}
