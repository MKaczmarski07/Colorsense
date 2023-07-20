import { Component } from '@angular/core';
import { FilterService } from '../filter.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public filterService: FilterService,
    private scrollService: ScrollService
  ) {}

  scrollDown() {
    const scrollPoint = document.querySelector('.scroll-point') as HTMLElement;
    if (window.innerWidth > 768) {
      this.scrollService
        .initializeSmoothScrollbar()
        .scrollIntoView(scrollPoint);
    } else {
      scrollPoint.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
