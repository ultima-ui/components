import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltIconModule, UltButtonModule } from '@ultima-ui/components';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltIconModule,
    UltButtonModule,
    PlaygroundModule,
    CodeBlockComponent
  ],
  templateUrl: './icon.component.html'
})
export class IconComponent {
  iconSetLibrary = `npm i iconify-icon @iconify-json/ph`;
  importModule = `import { UltIconModule } from '@ultima-ui/components';`;
  iconName = 'ph:info';

  change() {
    this.iconName = 'ph:info-fill';
  }
}
