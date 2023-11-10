import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { FilterService } from '../../services/filter.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.scss'],
})
export class ContrastComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
  }

  ngAfterViewInit() {
    if (window.innerWidth > 768 && this.scrollService.checkBrowser()) {
      this.scrollService.initializeSmoothScrollbar().setPosition(0, 0);
    } else {
      document.body.scrollTop = 0;
    }
  }
}
