import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.checkCssSupport();
    this.colorsService.loadColors();
  }

  ngAfterViewInit() {
    if (window.innerWidth > 768 && this.scrollService.checkBrowser()) {
      this.scrollService.initializeSmoothScrollbar().setPosition(0, 0);
    } else {
      document.body.scrollTop = 0;
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
