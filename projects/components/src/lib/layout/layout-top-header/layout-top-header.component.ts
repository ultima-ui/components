import { Component, inject, Input } from '@angular/core';
import { LayoutApi } from '../layout.api';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ult-layout-top-header',
  exportAs: 'ultLayoutTopHeader',
  templateUrl: './layout-top-header.component.html',
  styleUrls: ['./layout-top-header.component.css'],
  host: {
    'class': 'ult-layout-top-header'
  }
})
export class LayoutTopHeaderComponent {
  readonly api = inject(LayoutApi);
  private _doc = inject(DOCUMENT);

  @Input()
  set height(height: string) {
    this._doc.documentElement.style.setProperty('--ult-layout-top-header-height', height);
  }

  ngOnInit() {
    this.api.enableLayout('top-header');
  }

  ngOnDestroy() {
    this.api.disableLayout('top-header');
    this._doc.documentElement.style.removeProperty('--ult-layout-top-header-height');
  }
}
