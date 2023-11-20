import { Component, inject, Input } from '@angular/core';
import { LayoutApi } from '../layout.api';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ult-layout-footer',
  exportAs: 'ultLayoutFooter',
  templateUrl: './layout-footer.component.html',
  host: {
    'class': 'ult-layout-footer'
  }
})
export class LayoutFooterComponent {
  readonly api = inject(LayoutApi);
  private _doc = inject(DOCUMENT);

  @Input()
  set height(height: string) {
    this._doc.documentElement.style.setProperty('--ult-layout-footer-height', height);
  }

  ngOnInit() {
    this.api.enableLayout('footer');
  }

  ngOnDestroy() {
    this.api.disableLayout('footer');
    this._doc.documentElement.style.removeProperty('--ult-layout-footer-height');
  }
}
