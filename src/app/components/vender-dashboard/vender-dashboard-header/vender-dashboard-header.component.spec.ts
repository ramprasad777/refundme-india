import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardHeaderComponent } from './vender-dashboard-header.component';

describe('VenderDashboardHeaderComponent', () => {
  let component: VenderDashboardHeaderComponent;
  let fixture: ComponentFixture<VenderDashboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
