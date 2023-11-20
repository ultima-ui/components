import { ConnectedPosition } from '@angular/cdk/overlay';
import { TooltipPosition } from './tooltip.properties';

export class PositionManager {
  private _positions: { [prop: string]: ConnectedPosition } = {
    'below-start': {
      originY: 'bottom',
      overlayY: 'top',
      originX: 'start',
      overlayX: 'start',
      panelClass: ['ult-tooltip-below', 'ult-tooltip-below-start']
    },
    'below-center': {
      originY: 'bottom',
      overlayY: 'top',
      originX: 'center',
      overlayX: 'center',
      panelClass: ['ult-tooltip-below', 'ult-tooltip-below-center']
    },
    'below-end': {
      originY: 'bottom',
      overlayY: 'top',
      originX: 'end',
      overlayX: 'end',
      panelClass: ['ult-tooltip-below', 'ult-tooltip-below-end']
    },
    'above-start': {
      originY: 'top',
      overlayY: 'bottom',
      originX: 'start',
      overlayX: 'start',
      panelClass: ['ult-tooltip-above', 'ult-tooltip-above-start']
    },
    'above-center': {
      originY: 'top',
      overlayY: 'bottom',
      originX: 'center',
      overlayX: 'center',
      panelClass: ['ult-tooltip-above', 'ult-tooltip-above-center']
    },
    'above-end': {
      originY: 'top',
      overlayY: 'bottom',
      originX: 'end',
      overlayX: 'end',
      panelClass: ['ult-tooltip-above', 'ult-tooltip-above-end']
    },
    'before-start': {
      originY: 'top',
      overlayY: 'top',
      originX: 'start',
      overlayX: 'end',
      panelClass: ['ult-tooltip-before', 'ult-tooltip-before-start']
    },
    'before-center': {
      originY: 'center',
      overlayY: 'center',
      originX: 'start',
      overlayX: 'end',
      panelClass: ['ult-tooltip-before', 'ult-tooltip-before-center']
    },
    'before-end': {
      originY: 'bottom',
      overlayY: 'bottom',
      originX: 'start',
      overlayX: 'end',
      panelClass: ['ult-tooltip-before', 'ult-tooltip-before-end']
    },
    'after-end': {
      originY: 'bottom',
      overlayY: 'bottom',
      originX: 'end',
      overlayX: 'start',
      panelClass: ['ult-tooltip-after', 'ult-tooltip-after-end']
    },
    'after-center': {
      originY: 'center',
      overlayY: 'center',
      originX: 'end',
      overlayX: 'start',
      panelClass: ['ult-tooltip-after', 'ult-tooltip-after-center']
    },
    'after-start': {
      originY: 'top',
      overlayY: 'top',
      originX: 'end',
      overlayX: 'start',
      panelClass: ['ult-tooltip-after', 'ult-tooltip-after-start']
    }
  };

  private _positionPairs: any = {
    'below-start': 'above-start',
    'below-center': 'above-center',
    'below-end': 'above-end',
    'above-start': 'below-start',
    'above-center': 'below-center',
    'above-end': 'below-end',
    'before-end': 'before-start',
    'before-center': 'after-center',
    'before-start': 'before-end',
    'after-end': 'after-start',
    'after-center': 'before-center',
    'after-start': 'after-end'
  };

  build(position: TooltipPosition): ConnectedPosition[] {
    return [this._positions[position], this._positions[this._positionPairs[position]]];
  }
}
