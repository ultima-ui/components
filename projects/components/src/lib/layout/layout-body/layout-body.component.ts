import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'ult-layout-body',
  exportAs: 'ultLayoutBody',
  templateUrl: './layout-body.component.html',
  host: {
    'class': 'ult-layout-body ult-native-scroll ult-layout-body-height',
    '[class.has-overflow-y]': 'hasOverflowY',
    '[class.has-overflow-x]': 'hasOverflowX',
  }
})
export class LayoutBodyComponent {
  @Input({ transform: booleanAttribute })
  hasOverflowY = false;

  @Input({ transform: booleanAttribute })
  hasOverflowX = false;
}
