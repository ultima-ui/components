import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { UltChipModule, UltIconModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltChipModule,
    UltIconModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  importModule = `import { UltChipModule } from '@ultima-ui/components';`;

  closed(data: any) {
    console.log('chip data: ' + data);
    console.log('chip closed');
  }
}
