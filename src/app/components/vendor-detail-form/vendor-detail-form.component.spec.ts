import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetailFormComponent } from './vendor-detail-form.component';

describe('VendorDetailFormComponent', () => {
  let component: VendorDetailFormComponent;
  let fixture: ComponentFixture<VendorDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
