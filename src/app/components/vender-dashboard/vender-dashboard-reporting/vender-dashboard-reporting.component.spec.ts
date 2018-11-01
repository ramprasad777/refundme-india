import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardReportingComponent } from './vender-dashboard-reporting.component';

describe('VenderDashboardReportingComponent', () => {
  let component: VenderDashboardReportingComponent;
  let fixture: ComponentFixture<VenderDashboardReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
