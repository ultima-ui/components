import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { CheckboxContentComponent } from './checkbox-content/checkbox-content.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

@NgModule({
  declarations: [
    CheckboxComponent,
    CheckboxContentComponent,
    CheckboxGroupComponent
  ],
  imports: [
    CommonModule,
    SafeHtmlPipe
  ],
  exports: [
    CheckboxComponent,
    CheckboxContentComponent,
    CheckboxGroupComponent
  ]
})
export class UltCheckboxModule { }
