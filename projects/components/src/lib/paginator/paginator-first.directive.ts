import { Directive, HostListener, inject } from '@angular/core';
import { PAGINATOR } from './properties';
import { PaginatorComponent } from './paginator/paginator.component';

@Directive({
  selector: '[ultPaginatorFirst]',
  exportAs: 'ultPaginatorFirst',
  host: {
    'class': 'ult-paginator-first'
  }
})
export class PaginatorFirstDirective {
  private _paginator = inject<PaginatorComponent>(PAGINATOR);

  get isDisabled(): boolean {
    return this._paginator.api.currentPage === 1;
  }

  @HostListener('click')
  private _handleClick() {
    if (!this.isDisabled) {
      this._paginator.api.firstPage();
    }
  }
}
