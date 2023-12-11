import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { UltAvatarModule, UltButtonModule, UltSegmentedModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltAvatarModule,
    UltButtonModule,
    UltSegmentedModule
  ],
  templateUrl: './segmented.component.html'
})
export class SegmentedComponent {
  importModule = `import { UltSegmentedModule } from '@ultima-ui/components';`;
}
