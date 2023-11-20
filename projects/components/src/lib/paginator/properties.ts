import { InjectionToken } from '@angular/core';

export class PageEvent {
  currentPage: number;
  previousPage?: number;
  pageSize: number;
  length: number;
  totalPages: number;
}

export interface PaginatorDefaultOptions {
  pageSize?: number;
  pageSizeOptions?: number[];
  hidePageSize?: boolean;
  showFirstLastButtons?: boolean;
}

export type PaginationReportType = 'range-of-items' | 'range-of-pages' | any;

export const PAGINATOR = new InjectionToken('PAGINATOR');

export const PAGINATOR_DEFAULT_OPTIONS = new InjectionToken<PaginatorDefaultOptions>(
  'PAGINATOR_DEFAULT_OPTIONS'
);
