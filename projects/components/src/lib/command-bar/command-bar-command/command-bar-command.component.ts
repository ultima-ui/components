import { Component, Input } from '@angular/core';

@Component({
  selector: 'ult-command-bar-command',
  exportAs: 'ultCommandBarCommand',
  templateUrl: './command-bar-command.component.html',
  styleUrl: './command-bar-command.component.css',
  host: {
    'class': 'ult-command-bar-command'
  }
})
export class CommandBarCommandComponent {
  @Input()
  shortcut: string;
}
