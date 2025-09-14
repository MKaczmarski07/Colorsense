import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
  ) {}

  ngOnInit() {
    this.checkCssSupport();
    this.colorsService.loadColors();
  }

  ngAfterViewInit() {
      document.body.scrollTop = 0;
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
