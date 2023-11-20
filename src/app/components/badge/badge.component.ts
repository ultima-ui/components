import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltBadgeModule } from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltBadgeModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './badge.component.html'
})
export class BadgeComponent {
  importUrl = `import { UltBadgeModule } from '@ultima-ui/components';`;
}
