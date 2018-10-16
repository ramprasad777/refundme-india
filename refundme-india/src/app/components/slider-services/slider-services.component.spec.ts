import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderServicesComponent } from './slider-services.component';

describe('SliderServicesComponent', () => {
  let component: SliderServicesComponent;
  let fixture: ComponentFixture<SliderServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
