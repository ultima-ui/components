import { Directive, HostListener, inject } from '@angular/core';
import { PAGINATOR } from './properties';
import { PaginatorComponent } from './paginator/paginator.component';

@Directive({
  selector: '[ultPaginatorLast]',
  exportAs: 'ultPaginatorLast',
  host: {
    'class': 'ult-paginator-last'
  }
})
export class PaginatorLastDirective {
  private _paginator = inject<PaginatorComponent>(PAGINATOR);

  get isDisabled(): boolean {
    return this._paginator.api.currentPage === this._paginator.api.totalPages;
  }

  @HostListener('click')
  private _handleClick() {
    if (!this.isDisabled) {
      this._paginator.api.lastPage();
    }
  }
}
