import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGameComponent } from './single-game.component';

describe('SingleGameComponent', () => {
  let component: SingleGameComponent;
  let fixture: ComponentFixture<SingleGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
