import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardMyStaffComponent } from './vender-dashboard-my-staff.component';

describe('VenderDashboardMyStaffComponent', () => {
  let component: VenderDashboardMyStaffComponent;
  let fixture: ComponentFixture<VenderDashboardMyStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardMyStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardMyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
