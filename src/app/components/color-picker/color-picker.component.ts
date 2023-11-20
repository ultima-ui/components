import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltColorPickerModule } from '@ultima-ui/components';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltColorPickerModule,
    PlaygroundModule,
    CodeBlockComponent
  ],
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent {
  importModule = `import { UltColorPickerModule } from '@ultima-ui/components';`;
  basicColor = '#0968da';
  popoverColor = 'red';
}
