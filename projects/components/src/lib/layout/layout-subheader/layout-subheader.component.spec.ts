import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSubheaderComponent } from './layout-subheader.component';

describe('LayoutSubheaderComponent', () => {
  let component: LayoutSubheaderComponent;
  let fixture: ComponentFixture<LayoutSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSubheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
