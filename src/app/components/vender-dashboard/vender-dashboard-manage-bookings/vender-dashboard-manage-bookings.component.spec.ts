import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardManageBookingsComponent } from './vender-dashboard-manage-bookings.component';

describe('VenderDashboardManageBookingsComponent', () => {
  let component: VenderDashboardManageBookingsComponent;
  let fixture: ComponentFixture<VenderDashboardManageBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardManageBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardManageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
