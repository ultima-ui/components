import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltDatePickerModule,
  UltButtonModule,
  UltPopoverModule,
  UltIconModule
} from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltButtonModule,
    UltPopoverModule,
    UltDatePickerModule,
    UltIconModule
  ],
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {
  selectedDate = new Date('Thu Oct 12 2023 00:00:00 GMT+0300');

  selectHandler(date: Date) {
    this.selectedDate = date;
  }
}
