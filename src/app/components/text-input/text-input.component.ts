import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltSpinnerModule, UltFormsModule, UltResizableContainerModule } from '@ultima-ui/components';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltFormsModule,
    UltSpinnerModule,
    CodeExampleModule,
    InlineCodeDirective,
    CodeBlockComponent,
    UltResizableContainerModule,
    PlaygroundModule
  ],
  templateUrl: './text-input.component.html'
})
export class TextInputComponent {
  importModule = `import { UltFormsModule } from '@ultima-ui/components';`;
  value = '';
}
