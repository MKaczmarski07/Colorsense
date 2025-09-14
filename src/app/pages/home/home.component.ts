import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public filterService: FilterService,
  ) {}

  ngOnInit() {
    this.checkCssSupport();
  }

  scrollDown() {
    const scrollPoint = document.querySelector('.scroll-point') as HTMLElement;
      scrollPoint.scrollIntoView({ behavior: 'smooth' });
    }
  
  checkCssSupport() {
    let isSupported = CSS.supports('height: 100svh');
    const elem = document.querySelectorAll(
      '.dynamicHeight'
    ) as NodeListOf<HTMLElement>;
    if (elem) {
      if (isSupported) {
        elem.forEach((e) => e.classList.add('supported'));
      } else {
        elem.forEach((e) => e.classList.add('not-supported'));
      }
    }
  }
}
