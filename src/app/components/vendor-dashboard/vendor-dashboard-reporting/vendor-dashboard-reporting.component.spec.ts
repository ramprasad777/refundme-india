import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardReportingComponent } from './vendor-dashboard-reporting.component';

describe('VendorDashboardReportingComponent', () => {
  let component: VendorDashboardReportingComponent;
  let fixture: ComponentFixture<VendorDashboardReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
