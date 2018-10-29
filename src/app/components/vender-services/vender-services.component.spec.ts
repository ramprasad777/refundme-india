import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderServicesComponent } from './vender-services.component';

describe('VenderServicesComponent', () => {
  let component: VenderServicesComponent;
  let fixture: ComponentFixture<VenderServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
