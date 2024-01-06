import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { UltNumberInputModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltNumberInputModule
  ],
  templateUrl: './number-input.component.html'
})
export class NumberInputComponent {
  importModule = "import { UltNumberInputModule } from '@ultima-ui/components';";
}
