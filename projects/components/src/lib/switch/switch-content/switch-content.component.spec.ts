import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchContentComponent } from './switch-content.component';

describe('SwitchContentComponent', () => {
  let component: SwitchContentComponent;
  let fixture: ComponentFixture<SwitchContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchContentComponent]
    });
    fixture = TestBed.createComponent(SwitchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
