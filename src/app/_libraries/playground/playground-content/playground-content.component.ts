import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'playground-content',
  templateUrl: './playground-content.component.html',
  styleUrls: ['./playground-content.component.css'],
  host: {
    'class': 'playground-content',
    '[class.is-centered]': 'centered && !centeredY && !centeredX',
    '[class.is-centered-y]': 'centeredY',
    '[class.is-centered-x]': 'centeredY',
  }
})
export class PlaygroundContentComponent {
  @Input({ transform: booleanAttribute }) centered = true;
  @Input({ transform: booleanAttribute }) centeredY = false;
  @Input({ transform: booleanAttribute }) centeredX = false;
}
