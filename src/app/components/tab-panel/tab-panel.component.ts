import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltIconModule, UltPanelModule, UltSliderModule, UltTabPanelModule } from '@ultima-ui/components';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltTabPanelModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltSliderModule,
    UltIconModule,
    UltPanelModule
  ],
  templateUrl: './tab-panel.component.html'
})
export class TabPanelComponent {
  importModule = `import { UltTabPanelModule } from '@ultima-ui/components';`;
}
