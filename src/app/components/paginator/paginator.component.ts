import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltPaginatorModule,
  PaginationReportType,
  UltButtonModule,
  UltIconModule,
  UltFormsModule,
  UltRadioModule
} from '@ultima-ui/components';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltPaginatorModule,
    UltButtonModule,
    UltFormsModule,
    UltRadioModule,
    UltIconModule,
    PlaygroundModule,
    CodeBlockComponent
  ],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  importModule = `import { UltPaginatorModule } from '@ultima-ui/components';`;
  length = 1500;
  currentPage = 1;
  visibleRangeLength = 7;
  paginationReport: PaginationReportType = 'range-of-pages';
}
