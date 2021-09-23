import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rc-navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.css']
})
export class NavigationArrowComponent implements OnInit {

  @Input() direction: 'back' | 'forward' | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
