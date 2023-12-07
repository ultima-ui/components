import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { UltButtonModule, UltColorPickerModule, UltExpandModule } from '@ultima-ui/components';

@Component({
  selector: 'app-expand',
  standalone: true,
  imports: [
    CommonModule,
    UltExpandModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltColorPickerModule,
    UltButtonModule
  ],
  templateUrl: './expand.component.html'
})
export class ExpandComponent {
  importModule = `import { UltExpandModule } from '@ultima-ui/components';`;
  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
