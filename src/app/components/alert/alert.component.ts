import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltAlertModule,
  UltButtonModule,
  UltCustomRadioModule,
  UltFormsModule,
  UltIconModule,
  UltSwitchModule
} from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    CommonModule,
    UltAlertModule,
    UltButtonModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule,
    UltFormsModule,
    UltSwitchModule,
    UltCustomRadioModule,
    UltIconModule
  ],
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  importExample = `import { UltAlertModule } from '@ultima-ui/components';`;
  basicExample = {
    variant: 'primary',
    bordered: false
  };
  titleExample = {
    variant: 'informative',
    bordered: false
  };
  iconExample = {
    variant: 'notice',
    bordered: false
  };
  closeExample = {
    variant: 'secondary',
    bordered: false
  };
  autoClose = 0;

  closed(data: string) {
    console.log('closed data:' + data);
  }

  setVariant(example: any, variant: string) {
    example.variant = variant;
  }

  isSelected(example: any, variant: string) {
    return example.variant === variant;
  }
}
