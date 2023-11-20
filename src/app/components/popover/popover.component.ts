import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltButtonModule,
  UltPopoverModule,
  UltRadioModule,
  PopoverPosition,
  UltFormsModule
} from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { FormsModule } from '@angular/forms';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltButtonModule,
    UltPopoverModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    UltRadioModule,
    FormsModule,
    UltFormsModule,
    PlaygroundModule
  ],
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  importModule = `import { UltPopoverModule } from '@ultima-ui/components';`;
  position: PopoverPosition = 'below-center';
}
