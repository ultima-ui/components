import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent, RadioControlRegistry } from './radio/radio.component';
import { RadioContentComponent } from './radio-content/radio-content.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  declarations: [
    RadioComponent,
    RadioContentComponent,
    RadioGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RadioComponent,
    RadioContentComponent,
    RadioGroupComponent
  ],
  providers: [
    RadioControlRegistry
  ]
})
export class UltRadioModule { }
