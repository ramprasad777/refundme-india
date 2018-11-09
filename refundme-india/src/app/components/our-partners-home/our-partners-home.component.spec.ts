import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPartnersHomeComponent } from './our-partners-home.component';

describe('OurPartnersHomeComponent', () => {
  let component: OurPartnersHomeComponent;
  let fixture: ComponentFixture<OurPartnersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPartnersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPartnersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
