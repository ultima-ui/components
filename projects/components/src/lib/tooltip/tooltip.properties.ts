import { InjectionToken } from '@angular/core';

export const TOOLTIP_DATA = new InjectionToken('Tooltip data');
export type TooltipPosition = 'below-start' | 'below-center' | 'below-end' |
                              'above-start' | 'above-center' | 'above-end' |
                              'before-start' | 'before-center' | 'before-end' |
                              'after-start' | 'after-center' | 'after-end' | string;
