import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardSystemSettingsComponent } from './vendor-dashboard-system-settings.component';

describe('VendorDashboardSystemSettingsComponent', () => {
  let component: VendorDashboardSystemSettingsComponent;
  let fixture: ComponentFixture<VendorDashboardSystemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardSystemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardSystemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
