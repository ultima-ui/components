import {
  Component,
  ElementRef,
  forwardRef,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { AvatarVariant, ULT_AVATAR_ACCESSOR } from '../avatar.properties';

@Component({
  selector: 'ult-avatar,[ult-avatar],[ultAvatar]',
  exportAs: 'ultAvatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  providers: [
    {
      provide: ULT_AVATAR_ACCESSOR,
      useExisting: forwardRef(() => AvatarComponent),
      multi: true
    }
  ],
  host: {
    'class': 'ult-avatar',
    '[class.is-clickable]': 'clickable',
    '[class.has-gradient]': 'gradient',
  }
})
export class AvatarComponent implements OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @Input()
  set variant(variant: AvatarVariant) {
    this._variant = variant;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'avatar-variant', this._variant);
  }
  private _variant: AvatarVariant = 'default';

  @Input() src!: string;
  @Input() clickable = false;
  @Input() text = '';
  @Input() alt = '';
  @Input() compactAlt = false;
  @Input() roundedFull = false;
  @Input() gradient = false;
  @Input() presenceIndicator: 'online' | 'offline' | null = null;

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'avatar-variant', this._variant);
  }
}
