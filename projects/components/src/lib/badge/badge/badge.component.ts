import { Component } from '@angular/core';

@Component({
  selector: 'ult-badge',
  exportAs: 'ultBadge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  host: {
    class: 'ult-badge'
  }
})
export class BadgeComponent {
}
