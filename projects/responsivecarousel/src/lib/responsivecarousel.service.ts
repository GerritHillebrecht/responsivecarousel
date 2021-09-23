import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsivecarouselService {

  public isHandset$: Observable<boolean>;
  public currentIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public itemsPerPage$: BehaviorSubject<number> = new BehaviorSubject<number>(4);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = breakpointObserver.observe([
      Breakpoints.Handset
    ]).pipe(map(result => result.matches))
  }

}
