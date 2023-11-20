import { Component } from '@angular/core';

@Component({
  selector: 'ult-breadcrumb-item,[ultBreadcrumbItem]',
  exportAs: 'ultBreadcrumbItem',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css'],
  host: {
    class: 'ult-breadcrumb-item'
  }
})
export class BreadcrumbItemComponent {
}
