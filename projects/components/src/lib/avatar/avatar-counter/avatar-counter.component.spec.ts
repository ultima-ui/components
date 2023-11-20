import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCounterComponent } from './avatar-counter.component';

describe('AvatarCounterComponent', () => {
  let component: AvatarCounterComponent;
  let fixture: ComponentFixture<AvatarCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
