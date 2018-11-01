import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderUpcomingBookingsComponent } from './vender-upcoming-bookings.component';

describe('VenderUpcomingBookingsComponent', () => {
  let component: VenderUpcomingBookingsComponent;
  let fixture: ComponentFixture<VenderUpcomingBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderUpcomingBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderUpcomingBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
