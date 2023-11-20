import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
import { AvatarCounterComponent } from './avatar-counter/avatar-counter.component';
import { AvatarCounterDirective } from './avatar-counter.directive';

@NgModule({
  declarations: [
    AvatarComponent,
    AvatarGroupComponent,
    AvatarCounterComponent,
    AvatarCounterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    AvatarGroupComponent,
    AvatarCounterComponent,
    AvatarCounterDirective
  ]
})
export class UltAvatarModule { }
