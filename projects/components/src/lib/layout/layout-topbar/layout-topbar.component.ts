import { Component, inject, Input } from '@angular/core';
import { LayoutApi } from '../layout.api';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ult-layout-topbar',
  exportAs: 'ultLayoutTopbar',
  templateUrl: './layout-topbar.component.html',
  styleUrls: ['layout-topbar.component.css'],
  host: {
    'class': 'ult-layout-topbar'
  }
})
export class LayoutTopbarComponent {
  readonly api = inject(LayoutApi);
  private _doc = inject(DOCUMENT);

  @Input()
  set height(height: any) {
    console.log(height);

    if (height) {
      this._doc.documentElement.style.setProperty('--ult-layout-topbar-height', height);
    } else {
      this._doc.documentElement.style.removeProperty('--ult-layout-topbar-height');
    }
  }

  ngOnInit() {
    this.api.enableLayout('topbar');
  }

  ngOnDestroy() {
    this.api.disableLayout('topbar');
    this._doc.documentElement.style.removeProperty('--ult-layout-topbar-height');
  }
}
