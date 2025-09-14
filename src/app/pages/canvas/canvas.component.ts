import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { FilterService } from '../../services/filter.service';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit, OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
    this.filterService.selectedDisability = 'normal';
    this.filterService.isFilterActive = false;
  }

  ngAfterViewInit() {
      document.body.scrollTop = 0;
  }
}
