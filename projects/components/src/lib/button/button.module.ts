import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { UltSpinnerModule } from '../spinner';
import { ButtonPrefixDirective } from './button-prefix.directive';
import { ButtonSuffixDirective } from './button-suffix.directive';
import { ButtonIconDirective } from './button-icon.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonPrefixDirective,
    ButtonSuffixDirective,
    ButtonIconDirective
  ],
  imports: [
    CommonModule,
    UltSpinnerModule
  ],
  exports: [
    ButtonComponent,
    ButtonPrefixDirective,
    ButtonSuffixDirective,
    ButtonIconDirective
  ]
})
export class UltButtonModule { }
