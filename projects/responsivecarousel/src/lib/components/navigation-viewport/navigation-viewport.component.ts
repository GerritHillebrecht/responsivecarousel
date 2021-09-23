import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ResponsivecarouselService } from '../../responsivecarousel.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CarouselImage } from '../../interfaces/image.model';
import { CarouselVideo } from '../../interfaces/video.model';

@Component({
  selector: 'rc-navigation-viewport',
  templateUrl: './navigation-viewport.component.html',
  styleUrls: ['./navigation-viewport.component.scss']
})
export class NavigationViewportComponent implements OnInit, AfterViewInit {

  @Input() media: (CarouselVideo | CarouselImage)[] | undefined;
  @Output() scrolled = new EventEmitter<number>();

  @ViewChild('mediaNavigationViewport')
  mediaNavigationViewport: ElementRef | undefined;

  viewportSize: number | undefined;


  constructor(public rcService: ResponsivecarouselService) {
    this.rcService.currentIndex$.subscribe((index: number) => this.scrollToIndex(index))
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.viewportSize = this.mediaNavigationViewport?.nativeElement.offsetWidth;
    fromEvent<any>(window, 'resize').subscribe(() => this.viewportSize = this.mediaNavigationViewport?.nativeElement.offsetWidth);

    setTimeout(() => fromEvent(this.mediaNavigationViewport?.nativeElement, 'scroll')
      .pipe(debounceTime(50))
      .subscribe((event: any) => this.scrolled.emit(event.target.scrollLeft))
      , 1);
  }

  navItemClicked(index: number) {
    this.rcService.currentIndex$.next(index)
  }

  scrollToIndex(index: number): void {
    if (this.viewportSize && this.media) {
      console.log('SCROLLING NAVIGATION')
      const scrollDistanceMultiplyer = index > 0 && index < this.media.length - this.rcService.itemsPerPage$.getValue() + 1
        ? index - 1
        : index;
      const scrollDistance = Math.ceil(scrollDistanceMultiplyer * this.viewportSize / this.rcService.itemsPerPage$.getValue() +1);
      this.mediaNavigationViewport?.nativeElement.scrollTo({
        left: scrollDistance,
        behavior: 'smooth' })
    }
  }

}
