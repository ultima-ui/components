import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltContentEditableModule } from '@ultima-ui/components';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UltContentEditableModule
  ],
  templateUrl: './contenteditable.component.html'
})
export class ContenteditableComponent {
  content = 'Some content text';
}
