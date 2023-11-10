import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { FilterService } from '../../services/filter.service';
import { GeneratorService } from '../../services/generator.service';

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
    this.generatorService.loadSettings();
  }
}
