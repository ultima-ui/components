import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'ult-switch-group',
  exportAs: 'ultSwitchGroup',
  templateUrl: './switch-group.component.html',
  styleUrls: ['./switch-group.component.css'],
  host: {
    'class': 'ult-switch-group',
    '[class.is-inline]': 'inline'
  }
})
export class SwitchGroupComponent {
  @Input({ transform: booleanAttribute }) inline = false;
}
