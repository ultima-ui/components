import {
  AfterContentInit, booleanAttribute,
  Component, ContentChild, ContentChildren, DestroyRef,
  ElementRef, EventEmitter,
  forwardRef,
  inject, Injector,
  Input, OnDestroy, OnInit, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { _getEventTarget } from '@angular/cdk/platform';
import { SelectTriggerSize, ULT_SELECT } from '../select.properties';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { PositionManager } from '../position.manager';
import { OptionComponent } from '../option/option.component';
import { FORM_FIELD } from '../../forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OptionCheckIconDirective } from '../option-check-icon.directive';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ult-select',
  exportAs: 'ultSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: ULT_SELECT,
      useExisting: SelectComponent
    }
  ],
  host: {
    'class': 'ult-select',
    '[class.is-focused]': 'api.isOpen() || _focused',
    '[class.is-opened]': 'api.isOpen()',
    '[class.is-invalid]': 'invalid',
    '[class.is-disabled]': 'disabled',
    '[class.is-readonly]': 'readonly',
    '[class.is-rounded-full]': 'roundedFull',
    '[class.is-empty]': 'isEmpty'
  }
})
export class SelectComponent implements ControlValueAccessor, OnInit, AfterContentInit, OnDestroy {
  readonly _formField = inject<any>(FORM_FIELD, { optional: true });
  private _renderer = inject(Renderer2);
  private _injector = inject(Injector);
  private _overlay = inject(Overlay);
  private _elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private _directionality = inject(Directionality, { optional: true });
  private _viewContainerRef = inject(ViewContainerRef);
  private _optionsPortal!: TemplatePortal;
  private _overlayRef: OverlayRef | null = null;
  private _destroyRef = inject(DestroyRef);
  private _mousePressed = false;
  private _isOpen = false;
  private _selectionModel!: SelectionModel<any>;

  @ViewChild('trigger', { read: ElementRef, static: true })
  private _triggerElement!: ElementRef;

  @ViewChild('options', { read: TemplateRef })
  private _optionsTpl!: TemplateRef<any>;

  @ContentChildren(OptionComponent, { descendants: true })
  _options!: QueryList<OptionComponent>;

  @ContentChild(OptionCheckIconDirective)
  readonly optionCheckIconRef: OptionCheckIconDirective;

  @Input({ transform: booleanAttribute })
  multiple = false;

  @Input({ transform: booleanAttribute })
  disabled!: boolean;

  @Input({ transform: booleanAttribute })
  roundedFull = false;

  @Input({ transform: booleanAttribute })
  readonly = false;

  @Input({ transform: booleanAttribute })
  invalid = false;

  @Input()
  placeholder = '';

  @Input()
  overlayPanelClass = '';

  @Input()
  set size(size: SelectTriggerSize) {
    this._size = size;

    if (this._triggerElement) {
      this._renderer.setAttribute(this._triggerElement.nativeElement, 'ult-select-trigger-size', this._size);
    }
  }
  private _size: SelectTriggerSize = 'default';

  @Output() readonly opened = new EventEmitter<void>();
  @Output() readonly closed = new EventEmitter<void>();

  _onChange: any = () => {};
  _onTouched: any = () => {};

  get id() {
    return this._formField?.id || null;
  }

  get isEmpty() {
    return this.api.isEmpty();
  }

  get api() {
    return {
      isOpen: () => this._isOpen,
      open: () => this._open(),
      close: () => this._close(),
      isSelected: (value: any) => this._selectionModel?.isSelected(value),
      isEmpty: () => this._selectionModel?.isEmpty(),
      select: (value: any) => this._select(value),
      deselect: (value: any) => this._deselect(value),
      toggle: (value: any) => this._toggle(value),
      clear: () => this._clear(),
      selectionModel: () => this._selectionModel,
    };
  }

  _focused = false;
  _triggerValue = '';

  ngOnInit() {
    this._selectionModel = new SelectionModel<any>(this.multiple, []);
    this._renderer.setAttribute(this._triggerElement.nativeElement, 'ult-select-trigger-size', this._size);
  }

  ngAfterContentInit() {
    this._makeValue(false);
  }

  ngOnDestroy() {
    this._destroyOverlay();
  }

  get elementWith(): string {
    return this._elementRef.nativeElement.getBoundingClientRect().width + 'px';
  }

  writeValue(value: any) {
    this._selectionModel = new SelectionModel<any>(this.multiple, value ? [value] : []);
    this._makeValue(false);
  }

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput) {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  _setTriggerValue(triggerValue: string) {
    this._triggerValue = triggerValue;
    this._onChange(
      this._selectionModel.isMultipleSelection() ? this._selectionModel.selected : this._selectionModel.selected[0]
    );
  }

  _overlayOutsideClick(event: any) {
    const target = _getEventTarget(event) as Element;
    const element = this._elementRef.nativeElement;

    if (target !== element && !element.contains(target)) {
      this._isOpen = false;
    }
  }

  _toggleTrigger() {
    this._mousePressed = false;

    if (!this._isOpen) {
      this._open();
    } else {
      this._close();
    }
  }

  _focusIn() {
    this._focused = true;
  }

  _focusOut() {
    if (this._mousePressed) {
      return;
    }

    this._focused = false;
  }

  _mousedown() {
    this._mousePressed = true;
  }

  private _open() {
    if (this._isOpen) {
      return;
    }

    this._isOpen = true;
    this.opened.emit();
    this._overlayRef = this._overlay.create(this._getOverlayConfig());
    this._overlayRef.attach(this._getOptionsContentPortal());
    this._subscribeToOutsideClicks();
  }

  private _close() {
    this._mousePressed = false;
    this._focused = false;
    this._isOpen = false;
    this.closed.next();
    this._overlayRef!?.detach();
  }

  private _clear() {
    this._selectionModel.clear();

    if (this._selectionModel.isMultipleSelection()) {
      this._onChange([]);
    } else {
      this._onChange(undefined);
    }

    this._triggerValue = '';
  }

  private _destroyOverlay() {
    this._overlayRef?.dispose();
    this._overlayRef = null;
  }

  private _subscribeToOutsideClicks() {
    if (this._overlayRef) {
      this._overlayRef
        .outsidePointerEvents()
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(event => {
          const target = _getEventTarget(event) as Element;
          const element = this._elementRef.nativeElement;

          if (target !== element && !element.contains(target)) {
            this._close();
          }
        })
      ;
    }
  }

  private _getOptionsContentPortal() {
    if (!this._optionsPortal) {
      this._optionsPortal = new TemplatePortal(
        this._optionsTpl,
        this._viewContainerRef,
        null,
        this._injector
      );
    }

    return this._optionsPortal;
  }

  private _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      direction: this._directionality || undefined,
      width: this.elementWith
    });
  }

  private _getOverlayPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withLockedPosition()
      .withGrowAfterOpen()
      .withPositions(this._getOverlayPositions())
    ;
  }

  private _getOverlayPositions(): ConnectedPosition[] {
    return (new PositionManager()).build('bottom');
  }

  private _select(value: any) {
    this._selectionModel.select(value);
    this._makeValue();
  }

  private _deselect(value: any) {
    this._selectionModel.deselect(value);
    this._makeValue();
  }

  private _toggle(value: any) {
    this._selectionModel.toggle(value);
    this._makeValue();
  }

  private _makeValue(emitChangeEvent = true) {
    if (!this._options) {
      return;
    }

    const selectedOptions = this._options.filter(
      optionComponent => optionComponent.api.isSelected() && optionComponent.api.nativeElement()
    );
    const triggerValue = selectedOptions.map(optionComponent => optionComponent.api.nativeElement().innerText);
    this._triggerValue = triggerValue.join(', ');

    if (emitChangeEvent) {
      const value = selectedOptions.map(optionComponent => optionComponent.value);
      this._onChange(this._selectionModel.isMultipleSelection() ? value : value[0]);
    }
  }
}
