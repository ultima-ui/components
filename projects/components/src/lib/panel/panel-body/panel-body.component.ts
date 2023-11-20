import { Component } from '@angular/core';

@Component({
  selector: 'ult-panel-body',
  exportAs: 'ultPanelBody',
  templateUrl: './panel-body.component.html',
  styleUrls: ['./panel-body.component.css'],
  host: {
    'class': 'ult-panel-body'
  }
})
export class PanelBodyComponent {
}
