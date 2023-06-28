import { Component } from '@angular/core';
import { ColorsService } from '../colors.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(-50%)',
          opacity: 0,
        }),
        animate('300ms cubic-bezier(0.35, 0, 0.25, 1)'),
        style({
          opacity: 1,
          transform: 'translateX(0)',
        }),
      ]),
      transition(':leave', [
        animate(
          '300ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({
            opacity: 0,
            transform: 'translateX(-50%)',
          })
        ),
      ]),
    ]),
  ],
})
export class MenuComponent {
  constructor(public colorsService: ColorsService) {}
}
