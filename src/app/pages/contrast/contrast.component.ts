import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.scss'],
})
export class ContrastComponent implements OnInit {
  constructor(
    public colorsService: ColorsService,
    public filterService: FilterService,
  ) {}

  ngOnInit() {
    this.colorsService.loadColors();
  }

  ngAfterViewInit() {
      document.body.scrollTop = 0;
  }
}
