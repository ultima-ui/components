import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltPanelModule, UltPinInputModule } from '@ultima-ui/components';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltPinInputModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltPanelModule
  ],
  templateUrl: './pin-input.component.html'
})
export class PinInputComponent {
  importModule = "import { UltPinInputModule } from '@ultima-ui/components';";
}
