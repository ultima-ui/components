import { EventEmitter } from '@angular/core';
import { ToastPosition } from './types';

export class ToastRef {
  readonly closed = new EventEmitter<any>();
  private _timeout!: any;

  get id(): number {
    return this._id;
  }

  get duration(): number {
    return this._duration;
  }

  get position(): ToastPosition {
    return this._position;
  }

  constructor(
    private _id: number,
    private _position: ToastPosition,
    private _duration: any
  ) { }

  close(result?: any) {
    clearTimeout(this._timeout);
    this.closed.emit(result);
  }
}
