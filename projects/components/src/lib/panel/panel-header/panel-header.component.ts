import { Component, ElementRef, inject, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ult-panel-header',
  exportAs: 'ultPanelHeader',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css'],
  host: {
    'class': 'ult-panel-header'
  }
})
export class PanelHeaderComponent implements OnDestroy {
  private _elementRef = inject(ElementRef);

  @Input()
  set height(height: string | number) {
    this._elementRef.nativeElement.style.setProperty('--ult-panel-header-height', height + 'px');
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--ult-panel-header-height');
  }
}
