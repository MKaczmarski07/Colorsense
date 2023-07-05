import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
    this.filterService.loadSettings();
  }
}
