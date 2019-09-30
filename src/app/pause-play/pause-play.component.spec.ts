import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausePlayComponent } from './pause-play.component';

describe('PausePlayComponent', () => {
  let component: PausePlayComponent;
  let fixture: ComponentFixture<PausePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
