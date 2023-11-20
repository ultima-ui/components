import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute, OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import { PageEvent, PAGINATOR } from '../properties';

@Component({
  selector: 'ult-paginator',
  exportAs: 'ultPaginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  providers: [
    {
      provide: PAGINATOR,
      useExisting: PaginatorComponent
    }
  ],
  host: {
    'class': 'ult-paginator'
  }
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input({ transform: numberAttribute })
  currentPage = 1;

  @Input({ transform: numberAttribute })
  length = 0;

  @Input({ transform: numberAttribute })
  pageSize = 50;

  @Input({ transform: booleanAttribute })
  hidePageSize = true;

  @Input({ transform: booleanAttribute })
  showFirstLastButtons = false;

  @Input({ transform: booleanAttribute })
  showPagesRange = false;

  @Input({ transform: numberAttribute })
  visibleRangeLength = 7;

  @Output() readonly pageChanged = new EventEmitter<PageEvent>();
  @Output() readonly currentPageChange = new EventEmitter<number>();

  pages: number[] = [];
  totalPages = 0;

  get api() {
    return {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      length: this.length,
      firstPage: () => this.firstPage(),
      lastPage: () => this.lastPage(),
      previousPage: () => this.previousPage(),
      nextPage: () => this.nextPage(),
      hasPreviousPage: () => this.hasPreviousPage(),
      hasNextPage: () => this.hasNextPage(),
      setPage: (pageNumber: number) => this.setPage(pageNumber),
    };
  }

  ngOnInit() {
    this._init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentPage'] && !changes['currentPage'].firstChange) {
      if (changes['pageSize'] && changes['pageSize'].previousValue !== changes['pageSize'].currentValue ||
        changes['length'] && changes['length'].previousValue !== changes['length'].currentValue ||
        changes['currentPage'].previousValue !== changes['currentPage'].currentValue
      ) {
        this._init();
      }
    }
  }

  nextPage(): void {
    if (!this.hasNextPage()) {
      return;
    }

    this.setPage(this.currentPage + 1);
  }

  previousPage(): void {
    if (!this.hasPreviousPage()) {
      return;
    }

    this.setPage(this.currentPage - 1);
  }

  firstPage(): void {
    if (!this.hasPreviousPage()) {
      return;
    }

    this.setPage(1);
  }

  lastPage(): void {
    if (!this.hasNextPage()) {
      return;
    }

    this.setPage(this.totalPages);
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1 && this.pageSize != 0;
  }

  hasNextPage(): boolean {
    return this.currentPage < this.totalPages && this.pageSize != 0;
  }

  setPage(currentPage: number) {
    const previousPage = this.currentPage;
    this.currentPage = currentPage;
    this.pages = this.getPages(this.currentPage, this.totalPages);
    this._emitPageEvent(previousPage);
  }

  _changePageSize(pageSize: number) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const previousPage = this.currentPage;
    this.currentPage = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPage);
  }

  private _emitPageEvent(previousPage: number) {
    this.currentPageChange.emit(this.currentPage);
    this.pageChanged.emit({
      previousPage,
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      length: this.length,
      totalPages: this.totalPages
    });
  }

  private _init() {
    this.totalPages = Math.ceil(this.length / this.pageSize);
    this.pages = this.getPages(this.currentPage, this.totalPages);
  }

  private getPages(currentPage: number, totalPages: number): number[] {
    const arrayRange = (start: number, stop: number, step = 1) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
      )
    ;

    if (totalPages <= this.visibleRangeLength) {
      return arrayRange(1, this.visibleRangeLength);
    }

    if (currentPage < this.visibleRangeLength - 2) {
      return [...arrayRange(1, this.visibleRangeLength - 2), -1, totalPages];
    } else if (currentPage > totalPages - this.visibleRangeLength + 3) {
      return [1, -1, ...arrayRange(totalPages - this.visibleRangeLength + 3, totalPages)];
    } else {
      const offset = Math.floor((this.visibleRangeLength - 4) / 2) || 1;
      return [1, -1, ...arrayRange(currentPage - offset, currentPage + offset), -1, totalPages];
    }
  }
}
