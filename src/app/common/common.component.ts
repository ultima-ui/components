import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UltBreadcrumbsModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UltBreadcrumbsModule,
    RouterLink
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {

}
