import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadioComponent } from './custom-radio.component';

describe('CustomRadioComponent', () => {
  let component: CustomRadioComponent;
  let fixture: ComponentFixture<CustomRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRadioComponent]
    });
    fixture = TestBed.createComponent(CustomRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
