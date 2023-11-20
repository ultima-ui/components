import { Component, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';
import { LayoutApi } from '../layout.api';

@Component({
  selector: 'ult-layout',
  templateUrl: './layout.component.html',
  host: {
    class: 'ult-layout'
  },
  providers: [LayoutApi]
})
export class LayoutComponent implements OnInit {

  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);
  readonly api = inject(LayoutApi);

  ngOnInit() {
    this.api.layoutEnabled.subscribe(layoutType => {
      this._renderer.addClass(this._elementRef.nativeElement, `ult-layout-has-${layoutType}`);
    });
    this.api.layoutDisabled.subscribe(layoutType => {
      this._renderer.removeClass(this._elementRef.nativeElement, `ult-layout-has-${layoutType}`);
    });
  }

}
