import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardWelcomeComponent } from './vendor-dashboard-welcome.component';

describe('VendorDashboardWelcomeComponent', () => {
  let component: VendorDashboardWelcomeComponent;
  let fixture: ComponentFixture<VendorDashboardWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
