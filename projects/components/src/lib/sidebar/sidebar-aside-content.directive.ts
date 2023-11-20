import {
  DestroyRef,
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { SidebarApiService } from './sidebar-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SIDEBAR_ASIDE } from './types';
import { SidebarAsideComponent } from './sidebar-aside/sidebar-aside.component';

@Directive({
  selector: '[ultSidebarAsideContent]',
  exportAs: 'ultSidebarAsideContent'
})
export class SidebarAsideContentDirective implements OnInit {
  private _aside = inject<SidebarAsideComponent>(SIDEBAR_ASIDE, { optional: true });
  private _api = inject(SidebarApiService);
  private _templateRef = inject(TemplateRef);
  private _viewContainer = inject(ViewContainerRef);
  private _destroyRef = inject(DestroyRef);
  private _id: any = this._aside ? this._aside.nextId++ : null;

  @Input('ultSidebarAsideContent')
  set id(id: any) {
    this._id = id;
  }

  ngOnInit() {
    if (this._api.isActive(this._id)) {
      this._show();
    } else {
      this._hide();
    }

    this._api.itemIdChange
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(id => {
        if (this._id === id) {
          this._show();
        } else {
          this._hide();
        }
      })
    ;

  }

  private _show() {
    this._viewContainer.clear();
    this._viewContainer.createEmbeddedView(this._templateRef);
  }

  private _hide() {
    this._viewContainer.clear();
  }
}
