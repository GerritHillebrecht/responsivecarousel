import { NgModule } from '@angular/core';
import { ResponsivecarouselComponent } from './responsivecarousel.component';
import { MediaPanelComponent } from './components/media-panel/media-panel.component';
import { CommonModule } from '@angular/common';
import { MediaPanelItemComponent } from './components/media-panel-item/media-panel-item.component';
import { MediaPanelImageComponent } from './components/media-panel-image/media-panel-image.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { NavigationArrowComponent } from './components/navigation-arrow/navigation-arrow.component';
import { NavigationViewportComponent } from './components/navigation-viewport/navigation-viewport.component'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ResponsivecarouselComponent,
    MediaPanelComponent,
    MediaPanelItemComponent,
    MediaPanelImageComponent,
    NavigationPanelComponent,
    NavigationArrowComponent,
    NavigationViewportComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ResponsivecarouselComponent
  ]
})
export class ResponsivecarouselModule { }
