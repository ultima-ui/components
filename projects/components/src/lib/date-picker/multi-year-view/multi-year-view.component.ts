import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NativeDateAdapter } from '../native-date-adapter';
import { DateAdapter } from '../date-adapter';

export const yearsPerPage = 24;
export const yearsPerRow = 4;

@Component({
  selector: 'ult-multi-year-view',
  templateUrl: './multi-year-view.component.html',
  styleUrls: ['./multi-year-view.component.css']
})
export class MultiYearViewComponent implements OnInit, OnChanges {
  @Input()
  activeDate: Date;

  @Input()
  get minDate(): Date | null {
    return this._minDate;
  }
  set minDate(value: Date | null) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  private _minDate: Date | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): Date | null {
    return this._maxDate;
  }
  set maxDate(value: Date | null) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  private _maxDate: Date | null;

  @Output()
  readonly yearSelected = new EventEmitter<number>();

  @Output()
  readonly yearPeriodChanged = new EventEmitter<number[]>();

  _dateAdapter = inject(NativeDateAdapter);
  _today = this._dateAdapter.today();
  _years: any[] = [];
  _activeYear: number;

  ngOnInit() {
    this._activeYear = this._dateAdapter.getYear(this.activeDate);
    this._init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeDate'] && !changes['activeDate'].firstChange &&
      changes['activeDate'].previousValue !== changes['activeDate'].currentValue) {
      this._init();
    }
  }

  select(year: number) {
    this.yearSelected.emit(year);
  }

  private _init() {
    this._years = [];
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    const minYearOfPage =
      activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate)
    ;
    this._years = [];

    for (let i = 0, row: number[] = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);

      if (row.length == yearsPerRow) {
        this._years = [...this._years, ...row.map(year => year)];
        row = [];
      }
    }

    this.yearPeriodChanged.emit([this._years[0], this._years[this._years.length - 1]]);
  }
}

export function isSameMultiYearView<D>(
  dateAdapter: DateAdapter<D>,
  date1: D,
  date2: D,
  minDate: D | null,
  maxDate: D | null,
): boolean {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return (
    Math.floor((year1 - startingYear) / yearsPerPage) ===
    Math.floor((year2 - startingYear) / yearsPerPage)
  );
}

/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
export function getActiveOffset<D>(
  dateAdapter: DateAdapter<D>,
  activeDate: D,
  minDate: D | null,
  maxDate: D | null,
): number {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}

/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear<D>(
  dateAdapter: DateAdapter<D>,
  minDate: D | null,
  maxDate: D | null,
): number {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}

/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a: number, b: number): number {
  return ((a % b) + b) % b;
}
