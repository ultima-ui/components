import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltRadioModule, UltFormsModule, UltSwitchModule } from '@ultima-ui/components';
import { FormControl, FormGroup } from '@angular/forms';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    CommonModule,
    UltRadioModule,
    UltFormsModule,
    UltSwitchModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './radio.component.html'
})
export class RadioComponent {
  importModule = `import { UltRadioModule } from '@ultima-ui/components';`;
  isInline = false;

  formGroup = new FormGroup({
    value: new FormControl({
      value: 'value2',
      disabled: false
    }),
  });

  fieldFormGroup = new FormGroup({
    value: new FormControl({
      value: 'value3',
      disabled: false
    }),
  });

  fieldRequiredFormGroup = new FormGroup({
    value: new FormControl({
      value: null,
      disabled: false
    }),
  });

  fieldHelperTextFormGroup = new FormGroup({
    value: new FormControl({
      value: null,
      disabled: false
    }),
  });

  fieldInvalidFormGroup = new FormGroup({
    value: new FormControl({
      value: 'value1',
      disabled: false
    }),
  });

  blocksGroup = new FormGroup({
    access: new FormControl({
      value: '',
      disabled: false
    }),
  });
}
