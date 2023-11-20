import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltBreadcrumbsModule } from '@ultima-ui/components';
import { RouterLink } from '@angular/router';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltBreadcrumbsModule,
    RouterLink,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {
  importModule = `import { UltBreadcrumbsModule } from '@ultima-ui/components';`;
  dataSource = [
    {
      name: 'Documentation',
      link: '/'
    },
    {
      name: 'Breadcrumbs'
    }
  ]

}
