import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
    this.filterService.selectedDisability = 'normal';
    this.filterService.isFilterActive = false;
  }

  ngAfterViewInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
