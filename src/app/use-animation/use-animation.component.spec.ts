import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAnimationComponent } from './use-animation.component';

describe('UseAnimationComponent', () => {
  let component: UseAnimationComponent;
  let fixture: ComponentFixture<UseAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
