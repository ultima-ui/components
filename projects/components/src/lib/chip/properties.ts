import { InjectionToken } from '@angular/core';

export const CHIP = new InjectionToken('Chip');
export type ChipSize = 'lg' | 'default' | 'sm' | string;
