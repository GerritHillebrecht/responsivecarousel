import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivecarouselComponent } from './responsivecarousel.component';

describe('ResponsivecarouselComponent', () => {
  let component: ResponsivecarouselComponent;
  let fixture: ComponentFixture<ResponsivecarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsivecarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
