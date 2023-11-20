import { Directive, HostListener, inject } from '@angular/core';
import { PAGINATOR } from './properties';
import { PaginatorComponent } from './paginator/paginator.component';

@Directive({
  selector: '[ultPaginatorNext]',
  exportAs: 'ultPaginatorNext',
  host: {
    'class': 'ult-paginator-next'
  }
})
export class PaginatorNextDirective {
  private _paginator = inject<PaginatorComponent>(PAGINATOR);

  get isDisabled(): boolean {
    return !this._paginator.api.hasNextPage();
  }

  @HostListener('click')
  private _handleClick() {
    if (!this.isDisabled) {
      this._paginator.api.nextPage();
    }
  }
}
