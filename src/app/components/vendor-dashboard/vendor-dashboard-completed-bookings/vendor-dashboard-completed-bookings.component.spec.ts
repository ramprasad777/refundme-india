import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorManageBookingsComponent } from './vendor-manage-bookings.component';

describe('VendorManageBookingsComponent', () => {
  let component: VendorManageBookingsComponent;
  let fixture: ComponentFixture<VendorManageBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorManageBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorManageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
