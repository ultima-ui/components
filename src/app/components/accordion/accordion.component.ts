import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltFormsModule, UltSwitchModule } from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { UltAccordionModule, UltIconModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltAccordionModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule,
    UltFormsModule,
    UltSwitchModule,
    UltIconModule
  ],
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  importModule = `import { UltAccordionModule } from '@ultima-ui/components';`;
  multiple = false;
}
