import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopHeaderComponent } from './layout-top-header.component';

describe('LayoutTopHeaderComponent', () => {
  let component: LayoutTopHeaderComponent;
  let fixture: ComponentFixture<LayoutTopHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutTopHeaderComponent]
    });
    fixture = TestBed.createComponent(LayoutTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
