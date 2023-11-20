import { Component } from '@angular/core';

@Component({
  selector: 'ult-popover',
  exportAs: 'ultPopover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  host: {
    'class': 'ult-popover'
  }
})
export class PopoverComponent {
}
