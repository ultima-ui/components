import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['playground.component.css'],
  host: {
    'class': 'playground',
    '[class.playground--styled]': 'styled'
  }
})
export class PlaygroundComponent {
  @Input({ transform: booleanAttribute }) styled = true;
}
