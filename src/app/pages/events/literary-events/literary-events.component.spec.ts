import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryEventsComponent } from './literary-events.component';

describe('LiteraryEventsComponent', () => {
  let component: LiteraryEventsComponent;
  let fixture: ComponentFixture<LiteraryEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteraryEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
