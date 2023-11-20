import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltCheckboxModule, UltFormsModule } from '@ultima-ui/components';
import { FormBuilder } from '@angular/forms';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltCheckboxModule,
    UltFormsModule,
    CodeExampleModule,
    InlineCodeDirective,
    CodeBlockComponent,
    PlaygroundModule
  ],
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  private _formBuilder = inject(FormBuilder);

  importModule = `import { UltCheckboxModule } from '@ultima-ui/components';`;
  checked = false;
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  blocksGroup = this._formBuilder.group({
    anyone: false,
    invite: false,
    nobody: false,
  });

  valueChange(value: boolean) {
    console.log(value);
  }
}
