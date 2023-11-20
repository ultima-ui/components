import { Directive, HostListener, inject, Input, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { DialogCloseOptions, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { DialogManager } from './dialog-manager';

@Directive({
  selector: '[ultDialogTriggerFor]',
  exportAs: 'ultDialogTriggerFor'
})
export class DialogTriggerForDirective {
  @Input('ultDialogTriggerFor') _templateOrComponent!: ComponentType<any> | TemplateRef<any>;
  @Input() config!: DialogConfig<any> | any;

  private _dialogRef!: DialogRef;
  private _dialogManager = inject(DialogManager);

  get api() {
    return {
      dialogRef: () => this._dialogRef,
      close: (result?: any, options?: DialogCloseOptions) => this._dialogRef.close(result, options)
    }
  }

  @HostListener('click')
  private _handleClick() {
    this._dialogRef = this._dialogManager.open(this._templateOrComponent, this.config);
  }
}
