import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'ult-panel-footer',
  exportAs: 'ultPanelFooter',
  templateUrl: './panel-footer.component.html',
  styleUrls: ['./panel-footer.component.css'],
  host: {
    'class': 'ult-panel-footer'
  }
})
export class PanelFooterComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  set height(height: string | number) {
    this._elementRef.nativeElement.style.setProperty('--ult-panel-footer-height', height + 'px');
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--ult-panel-footer-height');
  }
}
