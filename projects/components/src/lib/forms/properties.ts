import { InjectionToken } from '@angular/core';

export interface FormField {
  id: string;
}

export const FORM_FIELD = new InjectionToken('Form Field');
export type InputSize = 'sm' | 'default' | 'lg' | string;
