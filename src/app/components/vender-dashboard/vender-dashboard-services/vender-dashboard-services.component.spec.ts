import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardServicesComponent } from './vender-dashboard-services.component';

describe('VenderDashboardServicesComponent', () => {
  let component: VenderDashboardServicesComponent;
  let fixture: ComponentFixture<VenderDashboardServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
