import { InjectionToken, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

export type NotificationPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | string;
export type NotificationContentRef = TemplateRef<any> | ComponentType<any>;
export interface NotificationOptions {
  stack?: boolean;
  position?: NotificationPosition;
  duration?: number | any;
}
export const NOTIFICATION_REF = new InjectionToken('NOTIFICATION_REF');
export const ULT_NOTIFICATION_COMPONENT_REF = new InjectionToken('ULT_NOTIFICATION_COMPONENT_REF');
