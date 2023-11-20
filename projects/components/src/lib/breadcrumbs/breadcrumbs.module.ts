import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { RouteBreadcrumbsComponent } from './route-breadcrumbs/route-breadcrumbs.component';
import { BreadcrumbSeparatorComponent } from './breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbItemDefDirective } from './breadcrumb-item-def.directive';
import { BreadcrumbSeparatorDefDirective } from './breadcrumb-separator-def.directive';
import { ɵEmptyOutletComponent } from '@angular/router';
import { BreadcrumbActiveItemComponent } from './breadcrumb-active-item/breadcrumb-active-item.component';
import { BreadcrumbActiveItemDefDirective } from './breadcrumb-active-item-def.directive';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    BreadcrumbItemComponent,
    RouteBreadcrumbsComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbSeparatorDefDirective,
    BreadcrumbItemDefDirective,
    BreadcrumbActiveItemComponent,
    BreadcrumbActiveItemDefDirective
  ],
  imports: [
    CommonModule,
    ɵEmptyOutletComponent
  ],
  exports: [
    BreadcrumbsComponent,
    RouteBreadcrumbsComponent,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbSeparatorDefDirective,
    BreadcrumbItemDefDirective,
    BreadcrumbActiveItemComponent,
    BreadcrumbActiveItemDefDirective
  ]
})
export class UltBreadcrumbsModule { }
