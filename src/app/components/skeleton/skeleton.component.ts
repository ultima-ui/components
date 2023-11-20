import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltSkeletonModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSkeletonModule
  ],
  templateUrl: './skeleton.component.html'
})
export class SkeletonComponent {
  items = [
    {
      width: 'w-full',
      height: 'h-5'
    }
  ];
}
