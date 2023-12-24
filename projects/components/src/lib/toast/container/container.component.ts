import {
  Component,
  inject,
  Injector,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ToastRef } from '../toast-ref';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { TOAST_REF, ToastContentRef, ToastPosition } from '../types';

let nextId = 0;

interface ToastDef {
  id: number,
  content: TemplatePortal | ComponentPortal<any>,
  toastRef: ToastRef
}

@Component({
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  host: {
    'class': 'ult-toast-container'
  }
})
export class ContainerComponent {
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);
  readonly toasts: ToastDef[] = [];

  add(contentRef: ToastContentRef, position: ToastPosition, duration: number | null): ToastRef {
    const toastRef = new ToastRef(nextId, position, duration);
    const injector = Injector.create({
      providers: [
        {
          provide: TOAST_REF,
          useValue: toastRef
        }
      ],
      parent: this._injector
    });
    const portal = contentRef instanceof TemplateRef ?
      new TemplatePortal(
        contentRef, this._viewContainerRef,
        { $implicit: toastRef },
        injector
      ) : new ComponentPortal(contentRef, null, injector)
    ;

    const notifyRef = {
      id: nextId,
      content: portal,
      toastRef
    };

    if (['top-start', 'top-center', 'top-end'].includes(position)) {
      this.toasts.push(notifyRef);
    } else if (['bottom-start', 'bottom-center', 'bottom-end'].includes(position)) {
      this.toasts.unshift(notifyRef);
    }

    const subscription = toastRef
      .closed
      .subscribe(() => {
        const index = this.toasts.findIndex(
          toast => toast.toastRef.id === toastRef.id
        );
        this.toasts.splice(index, 1);
        subscription.unsubscribe();
      })
    ;
    nextId++;

    return toastRef;
  }

  closeAll() {
    this.toasts.forEach(toastDef => {
      toastDef.toastRef.close();
    });
  }

  trackBy(index: number, item: any): number {
    return item.id;
  }
}
