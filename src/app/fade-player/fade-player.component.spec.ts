import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadePlayerComponent } from './fade-player.component';

describe('FadePlayerComponent', () => {
  let component: FadePlayerComponent;
  let fixture: ComponentFixture<FadePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
