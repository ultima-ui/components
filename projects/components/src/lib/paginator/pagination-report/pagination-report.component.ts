import { Component, Input, numberAttribute, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PaginationReportType } from '../properties';

@Component({
  selector: 'ult-pagination-report',
  exportAs: 'ultPaginationReport',
  templateUrl: './pagination-report.component.html',
  styleUrls: ['./pagination-report.component.css'],
  host: {
    'class': 'ult-pagination-report'
  }
})
export class PaginationReportComponent implements OnInit, OnChanges {
  @Input({ transform: numberAttribute })
  currentPage = 1;

  @Input({ transform: numberAttribute })
  length = 0;

  @Input({ transform: numberAttribute })
  pageSize = 50;

  @Input()
  type: PaginationReportType = 'range-of-items';

  totalPages = 0;

  ngOnInit() {
    this._init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pageSize'] && changes['pageSize'].previousValue !== changes['pageSize'].currentValue ||
        changes['length'] && changes['length'].previousValue !== changes['length'].currentValue
    ) {
      this._init();
    }
  }

  private _init() {
    this.totalPages = Math.ceil(this.length / this.pageSize);
  }
}
