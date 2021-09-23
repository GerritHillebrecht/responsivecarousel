import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from '../../interfaces/image.model';

@Component({
  selector: 'rc-media-panel-image',
  templateUrl: './media-panel-image.component.html',
  styleUrls: ['./media-panel-image.component.css']
})
export class MediaPanelImageComponent implements OnInit {

  @Input() image: CarouselImage | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
