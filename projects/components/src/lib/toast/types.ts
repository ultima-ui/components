import { InjectionToken, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | string;
export type ToastContentRef = TemplateRef<any> | ComponentType<any>;
export interface ToastOptions {
  stack?: boolean;
  position?: ToastPosition;
  duration?: number | any;
}
export const TOAST_REF = new InjectionToken('TOAST_REF');
export const ULT_TOAST_COMPONENT_REF = new InjectionToken('ULT_TOAST_COMPONENT_REF');
