import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.scss'],
})
export class ContrastComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
  }

  ngAfterViewInit() {
    this.scrollService.initializeSmoothScrollbar().setPosition(0, 0);
  }
}
