import { Component, inject, Input } from '@angular/core';
import { LayoutApi } from '../layout.api';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ult-layout-header',
  exportAs: 'ultLayoutHeader',
  templateUrl: './layout-header.component.html',
  host: {
    'class': 'ult-layout-header'
  }
})
export class LayoutHeaderComponent {
  readonly api = inject(LayoutApi);
  private _doc = inject(DOCUMENT);

  @Input()
  set height(height: string) {
    this._doc.documentElement.style.setProperty('--ult-layout-header-height', height);
  }

  ngOnInit() {
    this.api.enableLayout('header');
  }

  ngOnDestroy() {
    this.api.disableLayout('header');
    this._doc.documentElement.style.removeProperty('--ult-layout-header-height');
  }
}
