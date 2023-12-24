import {
  inject,
  Injectable,
  Injector
} from '@angular/core';
import { ToastRef } from './toast-ref';
import { ContainerComponent } from './container/container.component';
import { Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastContentRef, ToastOptions, ToastPosition } from './types';

const containerRefs = new Map();

@Injectable()
export class ToastService {
  private _injector = inject(Injector);
  private _overlay = inject(Overlay);
  private _position!: ToastPosition;

  open(
    contentRef: ToastContentRef,
    options?: ToastOptions
  ): ToastRef {
    options = {
      stack: false,
      duration: 3000,
      ...options
    };

    if (!options.position) {
      options.position = 'top-center';
    }

    this._position = options.position;

    if (!containerRefs.has(options.position)) {
      const overlayRef = this._overlay.create(this.getOverlayConfig());
      const portal = new ComponentPortal(ContainerComponent, null, this._injector);
      const containerRef = overlayRef.attach(portal);
      containerRefs.set(options.position, containerRef);
    }

    const containerRef = containerRefs.get(this._position);
    const toastRef = <ToastRef>containerRef.instance.add(contentRef, options.position, options.duration);
    containerRef.changeDetectorRef.detectChanges();

    return toastRef;
  }

  closeAll() {
    // containerRefs.forEach((containerRef, index) => {
    //   containerRef.instance.closeAll();
    //   containerRef.destroy();
    //   containerRefs.delete();
    // });
  }

  protected getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: false,
      positionStrategy: this.getOverlayPosition(),
      scrollStrategy: this._overlay.scrollStrategies.noop()
    });
  }

  protected getOverlayPosition(): PositionStrategy {
    let global = this._overlay.position().global();

    if (['top-center', 'bottom-center'].includes(this._position)) {
      global = global.centerHorizontally();
    }

    if (['top-start', 'top-center', 'top-end'].includes(this._position)) {
      global = global.top('0');
    }

    if (['bottom-start', 'bottom-center', 'bottom-end'].includes(this._position)) {
      global = global.bottom('0');
    }

    if (['top-start', 'bottom-start'].includes(this._position)) {
      global = global.start('0');
    }

    if (['top-end', 'bottom-end'].includes(this._position)) {
      global = global.end('0');
    }

    return global;
  }
}
