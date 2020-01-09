import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCarouselComponent } from './theme-carousel.component';

describe('ThemeCarouselComponent', () => {
  let component: ThemeCarouselComponent;
  let fixture: ComponentFixture<ThemeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
