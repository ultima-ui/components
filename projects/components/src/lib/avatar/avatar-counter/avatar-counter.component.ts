import { Component } from '@angular/core';

@Component({
  selector: 'ult-avatar-counter',
  exportAs: 'ultAvatarCounter',
  templateUrl: './avatar-counter.component.html',
  styleUrls: ['./avatar-counter.component.css'],
  host: {
    class: 'ult-avatar-counter'
  }
})
export class AvatarCounterComponent {
}
