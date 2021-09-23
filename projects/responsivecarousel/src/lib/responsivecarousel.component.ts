import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from './interfaces/image.model';
import { CarouselVideo } from './interfaces/video.model';
import { ResponsivecarouselService } from './responsivecarousel.service';

@Component({
  selector: 'rc-responsivecarousel',
  templateUrl: './responsivecarousel.component.html',
  styleUrls: ['./responsivecarousel.component.scss']
})
export class ResponsivecarouselComponent implements OnInit {

  currentIndex: number = 0;

  @Input() media: (CarouselImage | CarouselVideo)[] = [
    {
      path: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83657971/fee_786_587_png',
      type: 'image'
    },
    {
      path: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83657952/fee_786_587_png',
      type: 'image'
    },
    {
      path: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83657954/fee_786_587_png',
      type: 'image'
    },
    {
      path: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83657957/fee_786_587_png',
      type: 'image'
    },
    {
      path: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83657959/fee_786_587_png',
      type: 'image'
    },
    {
      path: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83657964/fee_786_587_png',
      type: 'image'
    }
  ];;
  @Input() itemsPerPage: number = 4;

  constructor(private rcService: ResponsivecarouselService) {
  }

  ngOnInit(): void {
    this.rcService.itemsPerPage$.next(this.itemsPerPage);
  }

}
