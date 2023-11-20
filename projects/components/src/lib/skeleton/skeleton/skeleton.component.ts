import { Component } from '@angular/core';

@Component({
  selector: 'ult-skeleton',
  exportAs: 'ultSkeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
  host: {
    'class': 'ult-skeleton'
  }
})
export class SkeletonComponent {
}
