import { Component, OnInit } from '@angular/core';
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
    public filterService: FilterService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
    this.filterService.selectedDisability = 'normal';
  }
}
