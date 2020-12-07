import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRExpComponent } from './vr-exp.component';

describe('VRExpComponent', () => {
  let component: VRExpComponent;
  let fixture: ComponentFixture<VRExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VRExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
