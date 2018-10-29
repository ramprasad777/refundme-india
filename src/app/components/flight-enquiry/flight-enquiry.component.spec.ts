import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEnquiryComponent } from './flight-enquiry.component';

describe('FlightEnquiryComponent', () => {
  let component: FlightEnquiryComponent;
  let fixture: ComponentFixture<FlightEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
