import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { INCIDENTS } from '../properties';
import { IncidentsComponent } from '../incidents/incidents.component';

@Component({
  selector: 'ult-incidents-bar',
  exportAs: 'ultIncidentsBar',
  templateUrl: './incidents-bar.component.html',
  styleUrls: ['./incidents-bar.component.css'],
  host: {
    'class': 'ult-incidents-bar'
  }
})
export class IncidentsBarComponent {
  private _parent = inject<IncidentsComponent>(INCIDENTS, { optional: true });

  @HostListener('click', ['$event'])
  private _handleClick() {
    this._parent?.toggleVisibility();
  }
}
