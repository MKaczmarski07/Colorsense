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
    this.colorsService.loadColors();
  }

  ngAfterViewInit() {
    if (window.innerWidth > 768) {
      this.scrollService.initializeSmoothScrollbar().setPosition(0, 0);
    } else {
      document.body.scrollTop = 0;
    }
  }
}
