import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { FilterService } from '../filter.service';
import { GeneratorService } from '../generator.service';
import { style, trigger, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('showMenu', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
        }),
        animate(
          '300ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms cubic-bezier(0.4, 0, 0.2, 0.3)',
          style({
            transform: 'translateX(100%)',
          })
        ),
      ]),
    ]),
  ],
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
