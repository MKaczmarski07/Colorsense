import { Component } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(public colorsService: ColorsService) {}
}
