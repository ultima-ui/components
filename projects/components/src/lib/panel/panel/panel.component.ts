import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'ult-panel',
  exportAs: 'ultPanel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  host: {
    'class': 'ult-panel',
    '[class.is-absolute]': 'absolute'
  }
})
export class PanelComponent {
  @Input({ transform: booleanAttribute })
  absolute = false
}
