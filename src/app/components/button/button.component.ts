import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltButtonModule,
  UltCheckboxModule,
  UltFormsModule,
  UltRadioModule,
  UltResizableContainerModule,
  UltSwitchModule,
  UltCustomRadioModule,
  UltIconModule
} from '@ultima-ui/components';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodeExampleModule,
    UltButtonModule,
    InlineCodeDirective,
    CodeBlockComponent,
    PlaygroundModule,
    UltResizableContainerModule,
    UltFormsModule,
    UltCheckboxModule,
    UltRadioModule,
    UltSwitchModule,
    UltCustomRadioModule,
    UltIconModule
  ],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  importModule = `import { UltButtonModule } from '@ultima-ui/components';`;
  basicExample = {
    variant: 'primary',
    disabled: false,
    loading: false,
    active: false
  };

  sizePlayground = {
    size: 'default'
  };

  iconsPlayground = {
    size: 'default'
  };

  loadingExample = {
    isLoading: true,
    loadingText: 'Loading...'
  };

  prefixSuffixExample = {
    size: 'default'
  };
}
