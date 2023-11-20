import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationApiService {

  private _activeGroup$ = new BehaviorSubject(null);
  private _activeItem$ = new BehaviorSubject(null);

  activeItemChanged(): BehaviorSubject<any> {
    return this._activeItem$;
  }

  toggleGroup(id: any) {
    if (this.isGroupActive(id)) {
      this.hideGroup();
    } else {
      this.showGroup(id);
    }
  }

  showGroup(id: any): void {
    this._activeGroup$.next(id);
  }

  hideGroup() {
    this._activeGroup$.next(null);
  }

  isGroupActive(id: any): boolean {
    return this._activeGroup$.value === id;
  }

  isItemActive(id: any): boolean {
    return this._activeItem$.value === id;
  }

  activateItem(id: any) {
    this._activeItem$.next(id);
  }

}
