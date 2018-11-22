import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardInvoicingComponent } from './vendor-dashboard-invoicing.component';

describe('VendorDashboardInvoicingComponent', () => {
  let component: VendorDashboardInvoicingComponent;
  let fixture: ComponentFixture<VendorDashboardInvoicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardInvoicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
