import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CarouselImage } from '../../interfaces/image.model';
import { CarouselVideo } from '../../interfaces/video.model';
import { ResponsivecarouselService } from '../../responsivecarousel.service'

@Component({
  selector: 'rc-media-panel',
  templateUrl: './media-panel.component.html',
  styleUrls: ['./media-panel.component.scss']
})
export class MediaPanelComponent implements OnInit {

  @Input() media: (CarouselImage | CarouselVideo)[] | undefined;

  @ViewChild('mediaPanel')
  mediaPanel: ElementRef | undefined;

  viewportSize: number | undefined;
  contentRendered: boolean = false;
  nextScrollComingFromTheMainScreen: boolean = false;

  constructor(public rcService: ResponsivecarouselService) {
    this.rcService.currentIndex$.subscribe((index: number) => {
      if (!this.nextScrollComingFromTheMainScreen) { return this.scrollToIndex(index) }
      this.nextScrollComingFromTheMainScreen = false;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      // Show Items
      this.contentRendered = true;

      // Set Viewportsize
      this.viewportSize = this.mediaPanel?.nativeElement.offsetWidth;
      fromEvent<any>(window, 'resize').subscribe(() => this.viewportSize = this.mediaPanel?.nativeElement.offsetWidth);

      // Update Index after scroll
      fromEvent<any>(this.mediaPanel?.nativeElement, 'scroll')
        .pipe(debounceTime(40))
        .subscribe((event: any) => {
          this.nextScrollComingFromTheMainScreen = true;
          this.rcService.currentIndex$.next(this.calculateIndex(event.target.scrollLeft));
        });
    }, 1);
  }

  identify(index: number, item: (CarouselImage | CarouselVideo)) {
    return item.path;
  }

  scrollToIndex(index: number): void {
    console.log({ index })
    this.mediaPanel?.nativeElement.scrollTo({ left: Math.ceil(index * this.viewportSize!), behavior: 'smooth' })
  }

  private calculateIndex(n: number): number {
    return Math.round((n + 1) / this.viewportSize!);
  }

}
