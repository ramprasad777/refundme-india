import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUpcomingBookingsComponent } from './vendor-upcoming-bookings.component';

describe('VendorUpcomingBookingsComponent', () => {
  let component: VendorUpcomingBookingsComponent;
  let fixture: ComponentFixture<VendorUpcomingBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorUpcomingBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUpcomingBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
