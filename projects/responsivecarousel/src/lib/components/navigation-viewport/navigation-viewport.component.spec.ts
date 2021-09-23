import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationViewportComponent } from './navigation-viewport.component';

describe('NavigationViewportComponent', () => {
  let component: NavigationViewportComponent;
  let fixture: ComponentFixture<NavigationViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationViewportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
