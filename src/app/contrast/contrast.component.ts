import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.scss'],
})
export class ContrastComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
  }
}
