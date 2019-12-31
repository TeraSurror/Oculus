import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingArtsComponent } from './performing-arts.component';

describe('PerformingArtsComponent', () => {
  let component: PerformingArtsComponent;
  let fixture: ComponentFixture<PerformingArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformingArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformingArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
