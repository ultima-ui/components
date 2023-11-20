import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'ult-checkbox-group',
  exportAs: 'ultCheckboxGroup',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
  host: {
    'class': 'ult-checkbox-group',
    '[class.is-inline]': 'inline',
  }
})
export class CheckboxGroupComponent {
  @Input({ transform: booleanAttribute }) inline = false;
}
