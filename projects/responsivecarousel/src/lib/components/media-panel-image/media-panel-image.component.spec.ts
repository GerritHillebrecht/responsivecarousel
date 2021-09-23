import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPanelImageComponent } from './media-panel-image.component';

describe('MediaPanelImageComponent', () => {
  let component: MediaPanelImageComponent;
  let fixture: ComponentFixture<MediaPanelImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPanelImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPanelImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
