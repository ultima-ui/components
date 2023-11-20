import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltSwitchModule, UltFormsModule, UltRadioModule } from '@ultima-ui/components';
import { FormsModule } from '@angular/forms';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSwitchModule,
    FormsModule,
    UltFormsModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule,
    UltRadioModule
  ],
  templateUrl: './switch.component.html'
})
export class SwitchComponent {
  importModule = `import { UltSwitchModule } from '@ultima-ui/components';`;
  checked = false;
  size = 'default';
  isInline = false;

  valueChange(value: boolean) {
    console.log(value);
  }
}
