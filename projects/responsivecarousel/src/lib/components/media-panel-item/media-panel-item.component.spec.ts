import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPanelItemComponent } from './media-panel-item.component';

describe('MediaPanelItemComponent', () => {
  let component: MediaPanelItemComponent;
  let fixture: ComponentFixture<MediaPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
