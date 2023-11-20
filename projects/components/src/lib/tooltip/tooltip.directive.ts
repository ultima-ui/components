import {
  booleanAttribute,
  Directive, ElementRef, EventEmitter,
  HostListener,
  inject, Injector,
  Input,
  numberAttribute,
  OnDestroy, Output,
  TemplateRef,
} from '@angular/core';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { ComponentPortal } from '@angular/cdk/portal';
import { TOOLTIP_DATA, TooltipPosition } from './tooltip.properties';
import { PositionManager } from './position-manager';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[ultTooltip]',
  exportAs: 'ultTooltip',
  host: {
    'class': 'ult-tooltip-trigger'
  }
})
export class TooltipDirective implements OnDestroy {
  private _overlay = inject(Overlay);
  private _elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private _directionality = inject(Directionality, { optional: true });
  private _injector = inject(Injector);

  private _portal!: ComponentPortal<TooltipComponent>;
  private _overlayRef: OverlayRef | null = null;

  @Input('ultTooltip') tooltip: string | TemplateRef<any>;
  @Input({ transform: numberAttribute }) delay = 200;
  @Input({ transform: booleanAttribute }) enabled = true;
  @Input() position: TooltipPosition = 'top-center';

  private _timeout: number;

  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  readonly api = {
    show: () => this._show(),
    hide: () => this._hide()
  };

  ngOnDestroy() {
    this._hide();
  }

  @HostListener('mouseenter')
  private _handleMouseEnter() {
    if (!this.enabled) {
      return;
    }

    this._timeout = setTimeout(() => {
      this._show();
    }, this.delay);
  }

  @HostListener('mouseleave')
  private _handleMouseLeave() {
    this._hide();
  }

  private _show() {
    this._overlayRef = this._overlay.create(this._getOverlayConfig());
    this._overlayRef.attach(this._getContentPortal());
    this.opened.emit();
  }

  private _hide() {
    clearTimeout(this._timeout);
    this._overlayRef?.detach();
    this._overlayRef = null;
    this.opened.emit();
  }

  private _getContentPortal() {
    const injector = Injector.create({
      providers: [
        {
          provide: TOOLTIP_DATA,
          useValue: this.tooltip
        }
      ],
      parent: this._injector
    });
    this._portal = new ComponentPortal<TooltipComponent>(TooltipComponent, null, injector);

    return this._portal;
  }

  private _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._directionality || undefined
    });
  }

  private _getOverlayPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withLockedPosition()
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions());
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    return (new PositionManager()).build(this.position);
  }
}
