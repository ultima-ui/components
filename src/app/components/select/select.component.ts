import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltSelectModule, UltRadioModule, UltFormsModule, UltIconModule } from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { FormsModule } from '@angular/forms';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSelectModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    FormsModule,
    PlaygroundModule,
    UltRadioModule,
    UltFormsModule,
    UltIconModule
  ],
  templateUrl: './select.component.html'
})
export class SelectComponent {
  importModule = `import { UltSelectModule } from '@ultima-ui/components';`;

  value = '2';
  value2 = null;
  value3 = null;
  value4 = null;
  value5 = '1';
  value6 = '1';

  visibility = 'anyone';

  options: any = [];
  size = 'default';

  constructor() {
    const options = [];

    for (let i = 1; i <= 100; i++) {
      options.push({
        id: i,
        name: 'Value ' + i
      });
    }

    this.options = options;
  }
}
