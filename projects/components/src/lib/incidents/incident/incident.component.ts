import { Component } from '@angular/core';

@Component({
  selector: 'ult-incident,[ult-incident]',
  exportAs: 'ultIncident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  host: {
    'class': 'ult-incident'
  }
})
export class IncidentComponent {
}
