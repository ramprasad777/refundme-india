import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardMyStaffComponent } from './vendor-dashboard-my-staff.component';

describe('VendorDashboardMyStaffComponent', () => {
  let component: VendorDashboardMyStaffComponent;
  let fixture: ComponentFixture<VendorDashboardMyStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardMyStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardMyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
