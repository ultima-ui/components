import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren, DestroyRef,
  inject,
  Input,
  QueryList
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ult-navigation-group-menu',
  exportAs: 'ultNavigationGroupMenu',
  templateUrl: './navigation-group-menu.component.html',
  styleUrls: ['./navigation-group-menu.component.css'],
  host: {
    'class': 'ult-navigation-group-menu',
    '[class.is-active]': 'active'
  }
})
export class NavigationGroupMenuComponent implements AfterContentInit {
  readonly api = inject(NavigationApiService);
  private _cdr = inject(ChangeDetectorRef);
  private _destroyRef = inject(DestroyRef);

  @ContentChildren(NavigationItemComponent, { descendants: true, emitDistinctChangesOnly: true })
  private _items!: QueryList<NavigationItemComponent>;

  @Input() id: any;

  get active(): boolean {
    return this.api.isGroupActive(this.id);
  }

  ngAfterContentInit() {
    this._detectGroupIsActive();
    this.api
      .activeItemChanged()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        this._detectGroupIsActive();
      })
    ;
  }

  private _detectGroupIsActive() {
    const isGroupActive = this._items.filter(itemComponent => this.api.isItemActive(itemComponent.id)).length > 0;

    if (isGroupActive) {
      this.api.showGroup(this.id);
    } else {
      this.api.hideGroup();
    }

    this._cdr.markForCheck();
  }
}
