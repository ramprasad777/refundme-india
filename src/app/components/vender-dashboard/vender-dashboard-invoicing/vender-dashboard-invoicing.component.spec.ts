import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardInvoicingComponent } from './vender-dashboard-invoicing.component';

describe('VenderDashboardInvoicingComponent', () => {
  let component: VenderDashboardInvoicingComponent;
  let fixture: ComponentFixture<VenderDashboardInvoicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardInvoicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
