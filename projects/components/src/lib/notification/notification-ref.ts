import { EventEmitter } from '@angular/core';
import { NotificationPosition } from './properties';

export class NotificationRef {
  readonly closed = new EventEmitter<any>();
  private _timeout!: any;

  get id(): number {
    return this._id;
  }

  get duration(): number {
    return this._duration;
  }

  get position(): NotificationPosition {
    return this._position;
  }

  constructor(
    private _id: number,
    private _position: NotificationPosition,
    private _duration: any
  ) { }

  close(result?: any) {
    clearTimeout(this._timeout);
    this.closed.emit(result);
  }
}
