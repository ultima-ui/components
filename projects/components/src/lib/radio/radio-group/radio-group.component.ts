import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'ult-radio-group',
  exportAs: 'ultRadioGroup',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  host: {
    'class': 'ult-radio-group',
    '[class.is-inline]': 'inline',
  }
})
export class RadioGroupComponent {
  @Input({ transform: booleanAttribute }) inline = false;
}
