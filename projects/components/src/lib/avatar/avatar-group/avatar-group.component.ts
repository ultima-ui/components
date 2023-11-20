import {
  AfterContentInit, afterNextRender,
  Component, ContentChild,
  ContentChildren, DestroyRef,
  ElementRef,
  inject, Input,
  QueryList,
  Renderer2, TemplateRef,
} from '@angular/core';
import { ULT_AVATAR_ACCESSOR } from '../avatar.properties';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { AvatarCounterDirective } from '../avatar-counter.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ult-avatar-group',
  exportAs: 'ultAvatarGroup',
  styleUrls: ['./avatar-group.component.css'],
  templateUrl: './avatar-group.component.html',
  host: {
    class: 'ult-avatar-group'
  }
})
export class AvatarGroupComponent implements AfterContentInit {
  private _renderer = inject(Renderer2);
  private _destroyRef = inject(DestroyRef);

  @ContentChildren(ULT_AVATAR_ACCESSOR, { read: ElementRef }) avatars!: QueryList<ElementRef>;
  @ContentChild(AvatarCounterDirective, { read: TemplateRef }) counterRef!: TemplateRef<any>;

  @Input() showCounter = true;
  @Input()
  set max(max: any) {
    this._max = coerceNumberProperty(max);
    this._setMax();
  }
  private _max = 0;

  constructor() {
    afterNextRender(() => {
      this._setMax();
    });
  }

  get api() {
    return {
      totalQuantity: () => this.avatars?.length || 0,
      hasCounter: () => this._max > 0 && (this.avatars?.length || 0) > this._max,
      counterQuantity: () => (this.avatars?.length || 0) - this._max
    };
  }

  ngAfterContentInit() {
    this.avatars.changes
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        this._setMax();
      })
    ;
  }

  private _setMax() {
    this.avatars?.forEach((avatar: ElementRef, index) => {
      if (this._max > 0 && index + 1 > this._max) {
        this._renderer.addClass(avatar.nativeElement, 'is-hidden');
      } else {
        this._renderer.removeClass(avatar.nativeElement, 'is-hidden');
      }
    });
  }
}
