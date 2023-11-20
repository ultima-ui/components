import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { CHIP, ChipSize } from '../properties';
import { ChipCloseIconDirective } from '../chip-close-icon.directive';

@Component({
  selector: 'ult-chip,[ult-chip]',
  exportAs: 'ultChip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
  providers: [
    {
      provide: CHIP,
      useExisting: ChipComponent
    }
  ],
  host: {
    class: 'ult-chip',
    '[class.is-clickable]': 'clickable',
  }
})
export class ChipComponent implements OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @ContentChild(ChipCloseIconDirective) closeIconRef!: ChipCloseIconDirective;

  @Input() clickable = false;
  @Input()
  set size(size: ChipSize) {
    this._size = size;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-chip-size', size);
  }
  private _size: ChipSize = 'default';

  @Output() readonly closed = new EventEmitter<any>();

  get api() {
    return {
      close: () => this._close()
    };
  }

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-chip-size', this._size);
  }

  private _close() {
    this.closed.emit();
  }
}
