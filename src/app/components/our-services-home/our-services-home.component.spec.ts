import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesHomeComponent } from './our-services-home.component';

describe('OurServicesHomeComponent', () => {
  let component: OurServicesHomeComponent;
  let fixture: ComponentFixture<OurServicesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
