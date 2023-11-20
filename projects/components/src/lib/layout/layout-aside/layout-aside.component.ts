import { Component, DestroyRef, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LayoutApi } from '../layout.api';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ult-layout-aside',
  exportAs: 'ultLayoutAside',
  templateUrl: './layout-aside.component.html',
  host: {
    'class': 'ult-layout-aside'
  }
})
export class LayoutAsideComponent implements OnInit, OnDestroy {
  private _layoutApi = inject(LayoutApi);
  private _destroyRef = inject(DestroyRef);

  @Output() readonly opened = new EventEmitter<void>();
  @Output() readonly closed = new EventEmitter<void>();

  @Input()
  set hidden(hidden: BooleanInput) {
    this._rebuild(coerceBooleanProperty(hidden));
  }

  private _hidden = false;

  get api() {
    return {
      toggle: () => this._hidden ? this._open() : this._close(),
      open: () => this._open(),
      close: () => this._close()
    };
  }

  ngOnInit() {
    this._layoutApi.enableLayout('aside');

    if (this._hidden) {
      this._layoutApi.enableLayout('aside-hidden');
    }

    this._layoutApi
      .asideHiddenChanged
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((hidden: boolean) => {
        this._rebuild(hidden);
      })
    ;
  }

  ngOnDestroy() {
    this._layoutApi.disableLayout('aside');
    this._layoutApi.disableLayout('aside-hidden');
  }

  private _rebuild(hidden: boolean) {
    if (!hidden) {
      this._close();
    } else {
      this._open();
    }
  }

  private _open() {
    this._hidden = false;
    this.opened.next();
    this._layoutApi.enableLayout('aside-hidden');
  }

  private _close() {
    this._hidden = true;
    this.closed.next();
    this._layoutApi.disableLayout('aside-hidden');
  }
}
