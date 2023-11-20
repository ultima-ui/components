import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import {
  UltAccordionModule,
  UltFormsModule,
  UltIconModule,
  UltSwitchModule
} from "@ultima-ui/components";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltAccordionModule,
    UltFormsModule,
    UltSwitchModule,
    UltIconModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  importModule = `import { UltAccordionModule } from '@ultima-ui/components';`;
  multiple = false;
}
