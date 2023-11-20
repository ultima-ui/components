import { Directive, HostListener, inject } from '@angular/core';
import { PAGINATOR } from './properties';
import { PaginatorComponent } from './paginator/paginator.component';

@Directive({
  selector: '[ultPaginatorPrevious]',
  exportAs: 'ultPaginatorPrevious',
  host: {
    'class': 'ult-paginator-previous'
  }
})
export class PaginatorPreviousDirective {
  private _paginator = inject<PaginatorComponent>(PAGINATOR);

  get isDisabled(): boolean {
    return !this._paginator.api.hasPreviousPage();
  }

  @HostListener('click')
  private _handleClick() {
    if (!this.isDisabled) {
      this._paginator.api.previousPage();
    }
  }
}
