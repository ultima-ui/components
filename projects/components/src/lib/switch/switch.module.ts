import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { SwitchContentComponent } from './switch-content/switch-content.component';
import { SwitchGroupComponent } from './switch-group/switch-group.component';

@NgModule({
  declarations: [
    SwitchComponent,
    SwitchContentComponent,
    SwitchGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchComponent,
    SwitchContentComponent,
    SwitchGroupComponent
  ]
})
export class UltSwitchModule { }
