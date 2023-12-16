import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import {
  UltAvatarModule,
  UltButtonModule,
  UltFormsModule, UltIconModule,
  UltRadioModule,
  UltSegmentedModule
} from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltAvatarModule,
    UltButtonModule,
    UltSegmentedModule,
    UltFormsModule,
    UltRadioModule,
    UltIconModule
  ],
  templateUrl: './segmented.component.html'
})
export class SegmentedComponent {
  importModule = `import { UltSegmentedModule } from '@ultima-ui/components';`;
  iconSizeMap = {
    default: 20,
    sm: 16,
    lg: 24
  };
  size = 'default';
}
