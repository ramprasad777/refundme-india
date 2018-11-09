import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourRightsComponent } from './know-your-rights.component';

describe('KnowYourRightsComponent', () => {
  let component: KnowYourRightsComponent;
  let fixture: ComponentFixture<KnowYourRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowYourRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
