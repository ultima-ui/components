import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { LayoutApi } from '../layout.api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ult-layout-sidebar',
  exportAs: 'ultLayoutSidebar',
  templateUrl: './layout-sidebar.component.html',
  host: {
    'class': 'ult-layout-sidebar'
  }
})
export class LayoutSidebarComponent implements OnInit, OnDestroy {
  readonly api = inject(LayoutApi);
  private _destroyRef = inject(DestroyRef);

  @Input()
  set hidden(hidden: boolean) {
    this._rebuild(hidden);
  }

  private _hidden = false;

  ngOnInit() {
    this.api.enableLayout('sidebar');

    if (this._hidden) {
      this.api.enableLayout('sidebar-hidden');
    }

    this.api
      .sidebarHiddenChanged
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((hidden: boolean) => {
        this._rebuild(hidden);
      })
    ;
  }

  ngOnDestroy() {
    this.api.disableLayout('sidebar');
    this.api.disableLayout(`sidebar-hidden`);
  }

  private _rebuild(hidden: boolean) {
    if (hidden) {
      this.api.enableLayout('sidebar-hidden');
    } else {
      this.api.disableLayout('sidebar-hidden');
    }

    this._hidden = hidden;
  }
}
