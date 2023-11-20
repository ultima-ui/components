import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldComponent } from './form-field/form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './label/label.component';
import { ErrorComponent } from './error/error.component';
import { HelperTextComponent } from './helper-text/helper-text.component';
import { InputComponent } from './input/input.component';
import { ErrorsComponent } from './errors/errors.component';
import { InputPrefixDirective } from './input-prefix.directive';
import { InputSuffixDirective } from './input-suffix.directive';

@NgModule({
  declarations: [
    FormFieldComponent,
    LabelComponent,
    HelperTextComponent,
    ErrorComponent,
    ErrorsComponent,
    InputComponent,
    InputPrefixDirective,
    InputSuffixDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent,
    LabelComponent,
    HelperTextComponent,
    ErrorComponent,
    ErrorsComponent,
    InputComponent,
    InputPrefixDirective,
    InputSuffixDirective
  ]
})
export class UltFormsModule { }
