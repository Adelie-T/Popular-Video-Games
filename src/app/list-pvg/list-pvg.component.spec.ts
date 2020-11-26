import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPVGComponent } from './list-pvg.component';

describe('ListPVGComponent', () => {
  let component: ListPVGComponent;
  let fixture: ComponentFixture<ListPVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
