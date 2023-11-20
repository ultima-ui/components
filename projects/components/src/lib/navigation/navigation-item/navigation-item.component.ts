import {
  booleanAttribute,
  Component, ContentChild, ElementRef,
  HostListener,
  inject,
  Input
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemIconDirective } from '../navigation-item-icon.directive';

@Component({
  selector: 'ult-navigation-item,[ult-navigation-item]',
  exportAs: 'ultNavigationItem',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.css'],
  host: {
    'class': 'ult-navigation-item',
    '[class.is-active]': 'forceActive || active'
  }
})
export class NavigationItemComponent {
  private _api = inject(NavigationApiService);
  private _elementRef = inject(ElementRef);

  @ContentChild(NavigationItemIconDirective)
  iconRef!: NavigationItemIconDirective;

  get api() {
    return {
      isActive: () => this.active
    }
  }

  @Input()
  id: any = Math.random();

  @Input({ transform: booleanAttribute })
  forceActive = false;

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    if (!this.id) {
      return;
    }

    this._api.activateItem(this.id);
  }

  get active(): boolean {
    return this._api.isItemActive(this.id);
  }

  get _hostElement(): ElementRef {
    return this._elementRef;
  }
}
