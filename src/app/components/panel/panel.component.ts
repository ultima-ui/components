import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltPanelModule } from '@ultima-ui/components';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    UltPanelModule,
    CodeBlockComponent,
    CodeExampleModule,
    InlineCodeDirective,
    PlaygroundModule
  ],
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  importModule = `import { UltPanelModule } from '@ultima-ui/components';`;
}
