import { InjectionToken } from '@angular/core';

export const ALERT = new InjectionToken('Alert');
export type AlertVariant = 'primary' | 'secondary' | 'positive' | 'informative' | 'negative' | string;
