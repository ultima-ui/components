import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'ult-content-fade',
  exportAs: 'ultContentFade',
  templateUrl: './content-fade.component.html',
  styleUrl: './content-fade.component.css',
  host: {
    'class': 'ult-content-fade'
  }
})
export class ContentFadeComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  set color(color: string) {
    (this._elementRef.nativeElement as HTMLElement).style.setProperty('--ult-content-fade-color', color, 'important');
  }

  @Input()
  set width(width: string) {
    (this._elementRef.nativeElement as HTMLElement).style.setProperty('--ult-content-fade-width', width, 'important');
  }
}
