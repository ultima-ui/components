import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LayoutApi } from '../layout.api';

@Component({
  selector: 'ult-layout-subheader',
  templateUrl: './layout-subheader.component.html',
  styleUrls: ['./layout-subheader.component.css']
})
export class LayoutSubheaderComponent implements OnInit, OnDestroy {
  readonly api = inject(LayoutApi);
  private _doc = inject(DOCUMENT);

  @Input()
  set height(height: string) {
    this._doc.documentElement.style.setProperty('--ult-layout-subheader-height', height);
  }

  ngOnInit() {
    this.api.enableLayout('footer');
  }

  ngOnDestroy() {
    this.api.disableLayout('footer');
    this._doc.documentElement.style.removeProperty('--ult-layout-subheader-height');
  }
}
