import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardServicesComponent } from './vendor-dashboard-services.component';

describe('VendorDashboardServicesComponent', () => {
  let component: VendorDashboardServicesComponent;
  let fixture: ComponentFixture<VendorDashboardServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
