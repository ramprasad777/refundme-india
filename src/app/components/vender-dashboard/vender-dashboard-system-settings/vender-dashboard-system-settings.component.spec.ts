import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardSystemSettingsComponent } from './vender-dashboard-system-settings.component';

describe('VenderDashboardSystemSettingsComponent', () => {
  let component: VenderDashboardSystemSettingsComponent;
  let fixture: ComponentFixture<VenderDashboardSystemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardSystemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardSystemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
