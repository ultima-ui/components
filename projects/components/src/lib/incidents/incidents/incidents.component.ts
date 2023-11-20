import {
  Component
} from '@angular/core';
import { INCIDENTS } from '../properties';

@Component({
  selector: 'ult-incidents',
  exportAs: 'ultIncidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
  providers: [
    {
      provide: INCIDENTS,
      useExisting: IncidentsComponent
    }
  ],
  host: {
    'class': 'ult-incidents',
    '[class.is-visible]': 'isVisible',
  }
})
export class IncidentsComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
