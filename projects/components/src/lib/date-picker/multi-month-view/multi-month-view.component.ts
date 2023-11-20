import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { NativeDateAdapter } from '../native-date-adapter';

@Component({
  selector: 'ult-multi-month-view',
  templateUrl: './multi-month-view.component.html',
  styleUrls: ['./multi-month-view.component.css']
})
export class MultiMonthViewComponent implements OnInit {
  @Input()
  activeDate: Date;

  @Output()
  readonly monthSelected = new EventEmitter<number>();

  _dateAdapter = inject(NativeDateAdapter);
  _months: string[] = [];
  _today = this._dateAdapter.today();

  ngOnInit() {
    this._months = this._dateAdapter.getMonthNames('long');
  }

  select(month: number) {
    this.monthSelected.emit(month);
  }
}
