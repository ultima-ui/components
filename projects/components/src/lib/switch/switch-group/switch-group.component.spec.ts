import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchGroupComponent } from './switch-group.component';

describe('SwitchGroupComponent', () => {
  let component: SwitchGroupComponent;
  let fixture: ComponentFixture<SwitchGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchGroupComponent]
    });
    fixture = TestBed.createComponent(SwitchGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
