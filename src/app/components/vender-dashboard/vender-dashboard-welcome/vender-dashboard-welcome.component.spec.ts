import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardWelcomeComponent } from './vender-dashboard-welcome.component';

describe('VenderDashboardWelcomeComponent', () => {
  let component: VenderDashboardWelcomeComponent;
  let fixture: ComponentFixture<VenderDashboardWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
