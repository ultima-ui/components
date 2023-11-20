import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltNavigationModule, UltBadgeModule, UltIconModule } from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltNavigationModule,
    UltBadgeModule,
    UltIconModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  importModule = `import { UltNavigationModule } from '@ultima-ui/components';`;
}
