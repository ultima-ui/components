import { inject, Injectable, TemplateRef } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';

@Injectable()
export class DialogManager {

  private _dialog = inject(Dialog);
  private _config: DialogConfig<any, any> = {
    autoFocus: false
  };
  static _openDialogs: DialogRef<any, any>[] = [];

  open<R = unknown, D = unknown, C = unknown>(
    templateOrComponent: ComponentType<any> | TemplateRef<any>,
    config?: DialogConfig<D, DialogRef<R, C>>
  ): DialogRef<R, C> {
    config = { ...this._config, ...(config || {}) };
    config.backdropClass = 'ult-dialog-overlay-backdrop';
    const dialogRef = this._dialog.open(templateOrComponent, config);
    DialogManager._openDialogs.push(dialogRef);

    return dialogRef;
  }

  closeAll() {
    this._closeDialogs(DialogManager._openDialogs);
  }

  private _closeDialogs(dialogs: DialogRef<any>[]) {
    let i = dialogs.length;

    while (i--) {
      dialogs[i].close();
    }
  }
}
