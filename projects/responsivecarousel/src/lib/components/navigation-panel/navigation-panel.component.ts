import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CarouselImage } from '../../interfaces/image.model';
import { CarouselVideo } from '../../interfaces/video.model';
import { ResponsivecarouselService } from '../../responsivecarousel.service'

@Component({
  selector: 'rc-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  @Input() media: (CarouselImage | CarouselVideo)[] | undefined;
  @Output() selected = new EventEmitter<number>()

  @ViewChild('mediaNavigationViewport')
  mediaNavigationViewport: ElementRef | undefined;
  mobileScrollPosition: string = 'translateY(-25%) translateX(0%)';

  showArrows: { back: boolean, forward: boolean } = {
    back: false,
    forward: true
  };

  constructor(public rcService: ResponsivecarouselService) {
    this.rcService.currentIndex$.subscribe((index: number) => {
      this.mobileScrollPosition = `translateY(-25%) translateX(${index * 100}%)`
      this.media && this.checkArrows();
    });
  }

  ngOnInit(): void {
  }

  checkArrows() {
    console.log('CHECKING ARROWSTATE')
    const amountItems = this.media!.length;
    const itemsPerPage = this.rcService.itemsPerPage$.getValue();
    const currentIndex = this.rcService.currentIndex$.getValue();
    this.showArrows.back = currentIndex > 0;
    this.showArrows.forward = currentIndex < (amountItems - itemsPerPage + 1);
  }

}
