// import { DestroyRef, Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
// import { TabsApiService } from './tabs-api.service';
// import { TABS_CONTENT } from './types';
// import { TabsContentComponent } from './tabs-content/tabs-content.component';
//
// @Directive({
//   selector: '[ultTabContent]'
// })
// export class TabContentDirective implements OnInit {
//   private _content = inject<TabsContentComponent>(TABS_CONTENT, { optional: true });
//   private _api = inject(TabsApiService);
//   private _templateRef = inject(TemplateRef);
//   private _viewContainer = inject(ViewContainerRef);
//   private _destroyRef = inject(DestroyRef);
//   private _id: any = this._content ? this._content.nextId++ : null;
//
//   @Input('ultTabContent')
//   set id(id: any) {
//     this._id = id;
//   }
//
//   ngOnInit() {
//     if (this._api.isActive(this._id)) {
//       this._show();
//     } else {
//       this._hide();
//     }
//
//     this._api.tabIdChange
//       .pipe(takeUntilDestroyed(this._destroyRef))
//       .subscribe(id => {
//         if (this._id === id) {
//           this._show();
//         } else {
//           this._hide();
//         }
//       })
//     ;
//   }
//
//   private _show() {
//     this._viewContainer.clear();
//     this._viewContainer.createEmbeddedView(this._templateRef);
//   }
//
//   private _hide() {
//     this._viewContainer.clear();
//   }
// }
