import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTransitionComponent } from './color-transition.component';

describe('ColorTransitionComponent', () => {
  let component: ColorTransitionComponent;
  let fixture: ComponentFixture<ColorTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
