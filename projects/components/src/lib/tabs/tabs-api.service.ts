import { EventEmitter, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()
export class TabsApiService {
  private _selectionModel = new SelectionModel(false, [0]);
  readonly tabIdChange = new EventEmitter<any>();

  activate(id: any, emitEvent = true) {
    this._selectionModel.select(id);

    if (emitEvent) {
      this.tabIdChange.emit(id);
    }
  }

  isActive(id: any): boolean {
    return this._selectionModel.isSelected(id);
  }

  hasActive(): boolean {
    return this._selectionModel.hasValue();
  }
}
