import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
    public generatorService: GeneratorService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
  }
}
