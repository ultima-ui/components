import { Component } from '@angular/core';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@Component({
  selector: 'ult-menu-group',
  exportAs: 'ultMenuGroup',
  templateUrl: './menu-group.component.html',
  providers: [
    {
      provide: UniqueSelectionDispatcher,
      useClass: UniqueSelectionDispatcher
    }
  ],
  host: {
    'role': 'group',
    'class': 'ult-menu-group',
  }
})
export class MenuGroupComponent {
}
