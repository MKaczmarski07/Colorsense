import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public filterService: FilterService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.checkCssSupport();
  }

  scrollDown() {
    const scrollPoint = document.querySelector('.scroll-point') as HTMLElement;
    if (window.innerWidth > 768 && this.scrollService.checkBrowser()) {
      this.scrollService
        .initializeSmoothScrollbar()
        .scrollIntoView(scrollPoint);
    } else {
      scrollPoint.scrollIntoView({ behavior: 'smooth' });
    }
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
