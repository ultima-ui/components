import { InjectionToken } from '@angular/core';

export const DATE_PICKER = new InjectionToken('DATE_PICKER');

export interface DatePickerSelectedEvent {
  original: Date;
  formatted: string;
}

export interface DayInMonth {
  isActive: boolean;
  date: Date;
}

export type DatePickerView = 'month' | 'multi-year' | 'multi-month';
