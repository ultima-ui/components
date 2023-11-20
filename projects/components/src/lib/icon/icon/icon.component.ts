import {
  booleanAttribute,
  Component, ElementRef,
  inject,
  Input,
  numberAttribute,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { loadIcon } from 'iconify-icon';

@Component({
  selector: 'ult-icon',
  exportAs: 'ultIcon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  host: {
    'class': 'ult-icon',
    '[class.is-loaded]': 'loaded'
  }
})
export class IconComponent implements OnInit, OnChanges {
  private _elementRef = inject(ElementRef);

  @Input()
  name: string | any;

  @Input({ transform: numberAttribute })
  set size(size: number) {
    this._elementRef.nativeElement.style.setProperty('--ult-icon-svg-size', size + 'px');
    this._elementRef.nativeElement.style.setProperty('--ult-icon-placeholder-size', size + 'px');
  }

  @Input({ transform: booleanAttribute })
  showPlaceholder = true;

  path = '';
  loaded = false;

  private _width = 0;
  private _height = 0;

  async ngOnInit() {
    await this._loadIcon();
  }

  get viewBox() {
    return `0 0 ${this._width} ${this._height}`
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && !changes['name'].isFirstChange()) {
      await this._loadIcon();
    }
  }

  private async _loadIcon() {
    const data = await loadIcon(this.name);
    this.path = data.body;
    this._width = data.width;
    this._height = data.height;
    this.loaded = true;
  }
}
