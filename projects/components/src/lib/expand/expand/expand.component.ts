import { booleanAttribute, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ult-expand',
  exportAs: 'ultExpand',
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.css',
  host: {
    'class': 'ult-expand',
    '[class.is-expanded]': 'expanded',
  },
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        overflow: 'none',
        height: '*'
      })),
      state('closed', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px'
      })),
      transition('open => closed', animate('150ms cubic-bezier(0.65,0,0.35,1)')),
      transition('closed => open', animate('300ms cubic-bezier(0.65,0,0.35,1)'))
    ])
  ]
})
export class ExpandComponent {
  @Input({ transform: booleanAttribute })
  expanded = false;
}
