import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPVGItemComponent } from './list-pvg-item.component';

describe('ListPVGItemComponent', () => {
  let component: ListPVGItemComponent;
  let fixture: ComponentFixture<ListPVGItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPVGItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPVGItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
