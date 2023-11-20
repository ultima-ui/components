import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NativeDateAdapter } from '../native-date-adapter';
import { DayInMonth } from '../properties';

@Component({
  selector: 'ult-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit, OnChanges {
  @Input()
  locale: string;

  @Input()
  firstDayOfWeek = 0;

  @Input()
  selected: Date | null;

  @Input()
  activeDate: Date;

  @Output()
  readonly selectedChange = new EventEmitter<Date>();

  _dateAdapter = inject(NativeDateAdapter);
  _dayOfWeekNames: string[] = [];
  _daysInMonths: DayInMonth[] = [];
  _today = this._dateAdapter.today();

  ngOnInit() {
    this._dayOfWeekNames = this._dateAdapter.getDayOfWeekNames('short', this.firstDayOfWeek);
    this._init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeDate'] && changes['activeDate'].currentValue !== changes['activeDate'].previousValue) {
      this._init();
    }
  }

  isEqual(d1: Date | null, d2: Date | null) {
    if (!d1 || !d2) {
      return false;
    }

    return this._dateAdapter.isSameYearAndMonth(d1, d2) && d1.getDate() === d2.getDate();
  }

  select(dayInMonth: DayInMonth) {
    this.selected = dayInMonth.date;
    this.selectedChange.emit(this.selected);
  }

  private _init() {
    this._daysInMonths = this._dateAdapter.getDaysInMonth(this.activeDate, this.firstDayOfWeek);
  }
}
