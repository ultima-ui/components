import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxContentComponent } from './checkbox-content.component';

describe('CheckboxContentComponent', () => {
  let component: CheckboxContentComponent;
  let fixture: ComponentFixture<CheckboxContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxContentComponent]
    });
    fixture = TestBed.createComponent(CheckboxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
