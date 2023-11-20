import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltMenuModule,
  UltButtonModule,
  UltAvatarModule,
  UltCheckboxModule,
  UltRadioModule,
  UltFormsModule,
  UltIconModule
} from '@ultima-ui/components';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { SelectionModel } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UltCheckboxModule,
    UltButtonModule,
    UltMenuModule,
    UltAvatarModule,
    UltRadioModule,
    CodeBlockComponent,
    CodeExampleModule,
    InlineCodeDirective,
    PlaygroundModule,
    UltFormsModule,
    UltIconModule
  ],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  importModule = `import { UltMenuModule } from '@ultima-ui/components';`;
  radioValue = new SelectionModel(false);
  checkboxValue = new SelectionModel(true);
  position = 'below-start';
}
