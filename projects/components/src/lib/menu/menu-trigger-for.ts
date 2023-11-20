import {
  Directive, ElementRef, EventEmitter,
  HostListener, inject, InjectionToken,
  Injector, Input, OnDestroy, Output, Renderer2,
  TemplateRef, ViewContainerRef,
} from '@angular/core';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay, OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { Menu, MENU, MenuPosition } from './menu.properties';
import { filter, fromEvent, merge, Subject, takeUntil } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directionality } from '@angular/cdk/bidi';
import { _getEventTarget } from '@angular/cdk/platform';
import { MENU_STACK, MenuStack, PARENT_OR_NEW_MENU_STACK_PROVIDER } from './menu-stack';
import { PositionManager } from './position-manager';

export const MENU_TRIGGER = new InjectionToken<MenuTriggerFor>('ult-menu-trigger');

@Directive({
  selector: '[ultMenuTriggerFor]',
  exportAs: 'ultMenuTriggerFor',
  providers: [
    { provide: MENU_TRIGGER, useExisting: MenuTriggerFor },
    PARENT_OR_NEW_MENU_STACK_PROVIDER
  ],
  host: {
    class: 'ult-menu-trigger-for',
    '[class.ult-menu-trigger-for--is-open]': 'api.isOpen()',
  }
})
export class MenuTriggerFor implements OnDestroy {
  @Input('ultMenuTriggerFor') menuTemplateRef!: TemplateRef<unknown>;

  private _elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private _overlay = inject(Overlay);
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);
  private _directionality = inject(Directionality, { optional: true });
  private _menuStack: MenuStack = inject(MENU_STACK);
  private _parentMenu = inject(MENU, { optional: true });
  private _renderer = inject(Renderer2);
  private _overlayRef: OverlayRef | null = null;
  private _menuPortal!: TemplatePortal;
  private _childMenuInjector?: Injector;
  private _childMenu?: Menu | null | undefined;

  @Input() position: MenuPosition = 'below-start';

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  private _destroy$: Subject<void> = new Subject();
  private _stopOutsideClicksListener = merge(this.closed, this._destroy$);

  constructor() {
    this._setType();
    this._subscribeToMouseEnter();
    this._menuStack.registerTrigger(this);
  }

  ngOnDestroy() {
    this._destroyOverlay();
    this._menuStack.unregisterTrigger(this);
    this._destroy$.next();
    this._destroy$.complete();
  }

  get api() {
    return {
      isOpen: () => this._isOpen(),
      toggle: () => this._toggle(),
      open: () => this._open(),
      close: () => this._close()
    };
  }

  @HostListener('click', ['$event'])
  private _toggle(event: MouseEvent | null = null) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this._isOpen() ? this._close() : this._open();
  }

  /** Open the attached menu. */
  private _open() {
    if (!this._isOpen() && this.menuTemplateRef != null) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-menu-is-open', 'true');
      this.opened.next();
      this._overlayRef = this._overlay.create(this._getOverlayConfig());
      this._overlayRef.attach(this.getMenuContentPortal());
      // const menuElement = this._overlayRef.overlayElement.querySelector('ult-menu');
      // this._renderer.setAttribute(menuElement, 'ult-menu-position', this.initialPosition);
      this._subscribeToOutsideClicks();
    }
  }

  /** Close the opened menu. */
  private _close() {
    if (this._isOpen()) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'ult-menu-is-open');
      this.closed.next();
      this._overlayRef!.detach();
    }
  }

  private _isOpen() {
    return !!this._overlayRef?.hasAttached();
  }

  getElement(): Element {
    return this._elementRef.nativeElement;
  }

  getMenu(): Menu | null | undefined {
    return this._childMenu;
  }

  registerChildMenu(child: Menu | null) {
    this._childMenu = child;
  }

  private _subscribeToMouseEnter() {
    fromEvent(this._elementRef.nativeElement, 'mouseenter')
      .pipe(
        filter(() => !this._menuStack.isEmpty() && !this.api.isOpen()),
        takeUntil(this._destroy$),
      )
      .subscribe((event) => {
        this._parentMenu?.triggers.forEach(menuTrigger => {
          menuTrigger.api.close();
        });
        this.api.open();
      })
    ;
  }

  private _subscribeToOutsideClicks() {
    if (this._overlayRef) {
      this._overlayRef
        .outsidePointerEvents()
        .pipe(
          takeUntil(this._stopOutsideClicksListener)
        )
        .subscribe(event => {
          const target = _getEventTarget(event) as Element;
          const element = this._elementRef.nativeElement;

          if (target !== element && !element.contains(target)) {
            if (!this._menuStack.isTargetInsideInTriggersOrInMenu(target)) {
              this._menuStack.closeAll();
            }
          }
        })
      ;
    }
  }

  private _setType() {
    const element = this._elementRef.nativeElement;

    if (element.nodeName === 'BUTTON' && !element.getAttribute('type')) {
      // Prevents form submissions.
      element.setAttribute('type', 'button');
    }
  }

  private getMenuContentPortal() {
    const hasMenuContentChanged = this.menuTemplateRef !== this._menuPortal?.templateRef;

    if (this.menuTemplateRef && (!this._menuPortal || hasMenuContentChanged)) {
      this._menuPortal = new TemplatePortal(
        this.menuTemplateRef,
        this._viewContainerRef,
        null,
        this._getChildMenuInjector(),
      );
    }

    return this._menuPortal;
  }

  private _getChildMenuInjector() {
    this._childMenuInjector =
      this._childMenuInjector ||
      Injector.create({
        providers: [
          { provide: MENU_TRIGGER, useValue: this },
          { provide: MENU_STACK, useValue: this._menuStack }
        ],
        parent: this._injector,
      });
    return this._childMenuInjector;
  }

  private _destroyOverlay() {
    this._overlayRef?.dispose();
    this._overlayRef = null;
  }

  private _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._directionality || undefined,
    });
  }

  private _getOverlayPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withLockedPosition(true)
      .withFlexibleDimensions(false)
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions());
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    if (!this._parentMenu) {
      return (new PositionManager()).build(this.position);
    }

    return (new PositionManager()).build('after-start');
  }
}
