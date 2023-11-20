import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OptionComponent } from './option/option.component';
import { OptgroupComponent } from './optgroup/optgroup.component';
import { OptionsComponent } from './options/options.component';
import { SelectToggleIconDirective } from './select-toggle-icon.directive';
import { SelectClearIconDirective } from './select-clear-icon.directive';
import { OptionCheckIconDirective } from './option-check-icon.directive';

@NgModule({
  declarations: [
    SelectComponent,
    OptionComponent,
    OptgroupComponent,
    OptionsComponent,
    SelectToggleIconDirective,
    SelectClearIconDirective,
    OptionCheckIconDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    SelectComponent,
    OptionComponent,
    OptgroupComponent,
    SelectToggleIconDirective,
    SelectClearIconDirective,
    OptionCheckIconDirective
  ]
})
export class UltSelectModule { }
