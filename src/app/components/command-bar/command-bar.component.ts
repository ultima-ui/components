import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import {
  UltCheckboxModule,
  UltColorPickerModule,
  UltCommandBarModule,
  UltFormsModule,
  UltRadioModule
} from '@ultima-ui/components';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltColorPickerModule,
    UltCheckboxModule,
    UltCommandBarModule,
    FormsModule,
    UltFormsModule,
    UltRadioModule
  ],
  templateUrl: './command-bar.component.html'
})
export class CommandBarComponent {
  importModule = `import { UltCommandBarModule } from '@ultima-ui/components';`;
  open = false;
  position = 'bottom';
}
