import { ConnectionPositionPair } from '@angular/cdk/overlay';

export class PositionManager {
  private _positionsMap: { [prop: string]: ConnectionPositionPair[] } = {
    top: [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        panelClass: ['ult-select-top-position']
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        panelClass: ['ult-select-bottom-position']
      }
    ],
    bottom: [
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        panelClass: ['ult-popover-bottom-position']
      },
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        panelClass: ['ult-popover-top-position']
      }
    ]
  };

  build(position: string): ConnectionPositionPair[] {
    return this._positionsMap[position];
  }
}
