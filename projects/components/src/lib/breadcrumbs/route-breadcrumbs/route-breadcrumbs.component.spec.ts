import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBreadcrumbsComponent } from './route-breadcrumbs.component';

describe('RouteBreadcrumbsComponent', () => {
  let component: RouteBreadcrumbsComponent;
  let fixture: ComponentFixture<RouteBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
