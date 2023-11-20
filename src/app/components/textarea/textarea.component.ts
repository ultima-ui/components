import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltFormsModule } from '@ultima-ui/components';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodeExampleModule,
    InlineCodeDirective,
    UltFormsModule,
    CodeBlockComponent,
    PlaygroundModule
  ],
  templateUrl: './textarea.component.html'
})
export class TextareaComponent {
  importModule = `import { UltFormsModule } from '@ultima-ui/components';`;
  value = '';
  readonlyValue = 'Some Value';
}
