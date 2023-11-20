import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginatorNextDirective } from './paginator-next.directive';
import { PaginatorPreviousDirective } from './paginator-previous.directive';
import { PaginatorFirstDirective } from './paginator-first.directive';
import { PaginatorLastDirective } from './paginator-last.directive';
import { PaginationReportComponent } from './pagination-report/pagination-report.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    PaginationReportComponent,
    PaginatorNextDirective,
    PaginatorPreviousDirective,
    PaginatorFirstDirective,
    PaginatorLastDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    PaginationReportComponent,
    PaginatorNextDirective,
    PaginatorPreviousDirective,
    PaginatorFirstDirective,
    PaginatorLastDirective
  ]
})
export class UltPaginatorModule { }
