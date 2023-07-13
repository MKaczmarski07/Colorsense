import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import * as chroma from 'chroma-js';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent implements OnInit {
  constructor(public colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.loadColors();
  }
}
