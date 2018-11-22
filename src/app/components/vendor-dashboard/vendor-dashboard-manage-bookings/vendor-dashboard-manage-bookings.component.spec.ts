import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardManageBookingsComponent } from './vendor-dashboard-manage-bookings.component';

describe('VendorDashboardManageBookingsComponent', () => {
  let component: VendorDashboardManageBookingsComponent;
  let fixture: ComponentFixture<VendorDashboardManageBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardManageBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardManageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
