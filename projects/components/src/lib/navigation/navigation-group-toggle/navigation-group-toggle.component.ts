import { Component, ContentChild, HostListener, inject, Input } from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationGroupToggleIconDirective } from '../navigation-group-toggle-icon.directive';

@Component({
  selector: 'ult-navigation-group-toggle',
  exportAs: 'ultNavigationGroupToggle',
  templateUrl: './navigation-group-toggle.component.html',
  styleUrls: ['./navigation-group-toggle.component.css'],
  host: {
    class: 'ult-navigation-group-toggle',
    '[class.is-active]': 'active'
  }
})
export class NavigationGroupToggleComponent {
  readonly api = inject(NavigationApiService);

  @ContentChild(NavigationGroupToggleIconDirective) iconRef!: NavigationGroupToggleIconDirective;

  @Input() for!: string;

  get active(): boolean {
    return this.api.isGroupActive(this.for);
  }

  @HostListener('click', ['$event'])
  toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleGroup(this.for);
  }
}
