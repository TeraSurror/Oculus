import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunEventsComponent } from './fun-events.component';

describe('FunEventsComponent', () => {
  let component: FunEventsComponent;
  let fixture: ComponentFixture<FunEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
