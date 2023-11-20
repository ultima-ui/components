import {
  Component,
  ContentChild, DestroyRef,
  inject,
  OnInit,
  TemplateRef
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbItemDefDirective } from '../breadcrumb-item-def.directive';
import { BreadcrumbSeparatorDefDirective } from '../breadcrumb-separator-def.directive';
import { BehaviorSubject, distinctUntilChanged, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreadcrumbActiveItemDefDirective } from '../breadcrumb-active-item-def.directive';

@Component({
  selector: 'ult-route-breadcrumbs',
  exportAs: 'ultRouteBreadcrumbs',
  templateUrl: './route-breadcrumbs.component.html',
  styleUrls: ['route-breadcrumbs.component.css'],
  host: {
    class: 'ult-breadcrumbs'
  }
})
export class RouteBreadcrumbsComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _destroyRef = inject(DestroyRef);

  @ContentChild(BreadcrumbItemDefDirective, { read: TemplateRef }) itemRef!: TemplateRef<any>;
  @ContentChild(BreadcrumbActiveItemDefDirective, { read: TemplateRef }) activeItemRef!: TemplateRef<any>;
  @ContentChild(BreadcrumbSeparatorDefDirective, { read: TemplateRef }) separatorRef!: TemplateRef<any>;

  _dataSource$ = new BehaviorSubject<any[]>([]);

  ngOnInit() {
    this._dataSource$.next(this._buildBreadcrumbs(this._activatedRoute.root));
    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(event => {
      this._dataSource$.next(this._buildBreadcrumbs(this._activatedRoute.root));
    });
  }

  private _buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
    const children = route.firstChild;

    if (!children) {
      return [...breadcrumbs];
    }

    const routeUrl: string = children.snapshot.url
      .map((segment) => segment.path)
      .join('/')
    ;
    const label = children.snapshot.data['breadcrumb'];

    if (routeUrl !== '') {
      url += `/${routeUrl}`;
    }

    if (breadcrumbs.length > 0 && (!routeUrl || !label)) {
      return this._buildBreadcrumbs(children, url, breadcrumbs);
    }

    const breadcrumb = {
      name: label,
      params: children.snapshot.params,
      link: url
    };

    return this._buildBreadcrumbs(children, url, [...breadcrumbs, breadcrumb]);
  }
}
