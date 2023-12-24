import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseToast } from '../base.toast';
import { ULT_TOAST_COMPONENT_REF } from '../types';

@Component({
  selector: 'ult-toast',
  exportAs: 'ultToast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  providers: [
    {
      provide: ULT_TOAST_COMPONENT_REF,
      useExisting: forwardRef(() => ToastComponent)
    }
  ],
  host: {
    'class': 'ult-toast',
    '[class.closed]': 'closed'
  }
})
export class ToastComponent extends BaseToast implements OnInit, OnDestroy {
  @Input()
  set appearance(appearance: string) {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-toast-appearance', appearance);
  }

  ngOnInit() {
    this._ngOnInit();
  }

  ngOnDestroy() {
    this._ngOnDestroy();
  }
}
