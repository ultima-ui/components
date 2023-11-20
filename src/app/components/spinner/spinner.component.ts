import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltSpinnerModule } from '@ultima-ui/components';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSpinnerModule,
    CodeExampleModule,
    HighlightPlusModule,
    InlineCodeDirective,
    CodeBlockComponent,
    PlaygroundModule
  ],
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {
  importModule = `import { UltSpinnerModule } from '@ultima-ui/components';`;
}
