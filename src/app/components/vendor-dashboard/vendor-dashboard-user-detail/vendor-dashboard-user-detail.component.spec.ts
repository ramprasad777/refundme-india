import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardUserDetailComponent } from './vendor-dashboard-user-detail.component';

describe('VendorDashboardUserDetailComponent', () => {
  let component: VendorDashboardUserDetailComponent;
  let fixture: ComponentFixture<VendorDashboardUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
