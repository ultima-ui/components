import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import 'iconify-icon';
import { SafeHtmlPipe } from '../safe-html.pipe';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    SafeHtmlPipe
  ],
  exports: [
    IconComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UltIconModule { }
