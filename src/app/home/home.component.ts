import { Component } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public filterService: FilterService) {}

  scrollDown() {
    const point = document.querySelector('.scroll-point');
    if (point) {
      point.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
