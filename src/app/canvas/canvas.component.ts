import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';
import { ScrollService } from '../scroll.service';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit, OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
    this.filterService.selectedDisability = 'normal';
    this.filterService.isFilterActive = false;
  }

  ngAfterViewInit() {
    if (window.innerWidth > 768) {
      this.scrollService.initializeSmoothScrollbar().setPosition(0, 0);
    } else {
      document.body.scrollTop = 0;
    }
  }
}
