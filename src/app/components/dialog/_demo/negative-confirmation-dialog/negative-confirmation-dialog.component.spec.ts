import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeConfirmationDialogComponent } from './negative-confirmation-dialog.component';

describe('NegativeConfirmationDialogComponent', () => {
  let component: NegativeConfirmationDialogComponent;
  let fixture: ComponentFixture<NegativeConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NegativeConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegativeConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
