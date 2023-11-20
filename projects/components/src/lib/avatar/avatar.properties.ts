import { InjectionToken } from '@angular/core';

export const ULT_AVATAR_ACCESSOR = new InjectionToken('Avatar');
export type AvatarVariant = 'default' | 'defaultGradient' | string;
