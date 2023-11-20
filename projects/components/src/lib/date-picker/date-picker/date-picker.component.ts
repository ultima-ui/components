import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { DATE_PICKER, DatePickerView } from '../properties';
import { NativeDateAdapter } from '../native-date-adapter';

@Component({
  selector: 'ult-date-picker',
  exportAs: 'ultDatePicker',
  templateUrl: './date-picker.component.html',
  providers: [
    {
      provide: DATE_PICKER,
      useExisting: DatePickerComponent
    },
    NativeDateAdapter
  ],
  styleUrls: ['./date-picker.component.css'],
  host: {
    'class': 'ult-date-picker'
  }
})
export class DatePickerComponent implements OnInit {
  @Input()
  locale = 'en-US';

  @Input()
  todayLabel = 'Today';

  @Input()
  firstDayOfWeek = 1;

  @Input()
  set selected(value: Date | null) {
    this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  get selected(): Date | null {
    return this._selected;
  }
  private _selected: Date | null;

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

  @Input()
  monthLabelFormat: 'long' | 'short' = 'long';

  @Input()
  startView: DatePickerView = 'month';

  @Output()
  readonly selectedChange = new EventEmitter<Date>();

  _activeDate: Date;
  _monthLabel: string;
  _yearLabel: string;
  _firstWeekOffset: number;
  _dateAdapter = inject(NativeDateAdapter);
  _cdr = inject(ChangeDetectorRef);
  _yearPeriod: number[] = [];
  _yearPeriodLabel: string;

  ngOnInit() {
    this._activeDate = this._dateAdapter.today();

    if (this.selected && !this._dateAdapter.isSameMonthAndYear(this.selected, this._activeDate)) {
      this._activeDate = this._dateAdapter.clone(this.selected);
    }

    this._init();
  }

  previous() {
    if (this.startView === 'month' || this.startView === 'multi-month') {
      this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -1);
    } else if (this.startView === 'multi-year') {
      this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -24);
    }

    this._init();
  }

  today() {
    this._activeDate = this._dateAdapter.today();
    this.startView = 'month';
    this._init();
  }

  next() {
    if (this.startView === 'month' || this.startView === 'multi-month') {
      this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 1);
    } else if (this.startView === 'multi-year') {
      this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, 24);
    }

    this._init();
  }

  toggleLabels() {
    if (this.startView === 'month') {
      this.startView = 'multi-year';
    } else {
      if (this.startView === 'multi-year') {
        this.startView = 'multi-month';
      } else if (this.startView === 'multi-month') {
        this.startView = 'month';
      }
    }
  }

  yearPeriodChanged(yearPeriod: number[]) {
    this._yearPeriodLabel = yearPeriod[0] + '-' + yearPeriod[1];
    this._cdr.detectChanges();
  }

  _emitSelectedEvent(date: Date) {
    this.selectedChange.emit(date);
  }

  _yearSelected(year: number) {
    this._activeDate = this._dateAdapter.createDate(year, this._activeDate.getMonth(), this._activeDate.getDate());
    this.startView = 'multi-month';
    this._init();
  }

  _monthSelected(month: number) {
    this._activeDate = this._dateAdapter.createDate(this._activeDate.getFullYear(), month, this._activeDate.getDate());
    this.startView = 'month';
    this._init();
  }

  private _init() {
    this._monthLabel = this._dateAdapter.getMonthNames(this.monthLabelFormat)[this._activeDate.getMonth()];
    this._yearLabel = this._dateAdapter.getYear(this._activeDate).toString();
  }
}
