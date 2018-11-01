import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderManageBookingsComponent } from './vender-manage-bookings.component';

describe('VenderManageBookingsComponent', () => {
  let component: VenderManageBookingsComponent;
  let fixture: ComponentFixture<VenderManageBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderManageBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderManageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
