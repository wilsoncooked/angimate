import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionSeekersComponent } from './attention-seekers.component';

describe('AttentionSeekersComponent', () => {
  let component: AttentionSeekersComponent;
  let fixture: ComponentFixture<AttentionSeekersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionSeekersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
