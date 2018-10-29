import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDashboardComponent } from './vender-dashboard.component';

describe('VenderDashboardComponent', () => {
  let component: VenderDashboardComponent;
  let fixture: ComponentFixture<VenderDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
