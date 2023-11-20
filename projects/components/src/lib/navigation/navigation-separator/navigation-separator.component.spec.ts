import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSeparatorComponent } from './navigation-separator.component';

describe('NavigationSeparatorComponent', () => {
  let component: NavigationSeparatorComponent;
  let fixture: ComponentFixture<NavigationSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationSeparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
