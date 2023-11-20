import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentEditableControlDirective } from './contenteditable-control.directive';

@NgModule({
  declarations: [
    ContentEditableControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentEditableControlDirective
  ]
})
export class UltContentEditableModule { }
