import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { A11yModule } from '@angular/cdk/a11y';
import { MultiYearViewComponent } from './multi-year-view/multi-year-view.component';
import { MultiMonthViewComponent } from './multi-month-view/multi-month-view.component';

@NgModule({
  declarations: [
    DatePickerComponent,
    MonthViewComponent,
    MultiYearViewComponent,
    MultiMonthViewComponent
  ],
  imports: [
    CommonModule,
    A11yModule
  ],
  exports: [
    DatePickerComponent
  ]
})
export class UltDatePickerModule { }
