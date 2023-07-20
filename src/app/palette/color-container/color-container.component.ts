import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from 'src/app/colors.service';
import * as chroma from 'chroma-js';

@Component({
  selector: 'app-color-container',
  templateUrl: './color-container.component.html',
  styleUrls: ['./color-container.component.scss'],
})
export class ColorContainerComponent implements OnInit {
  constructor(public colorsService: ColorsService) {}
  @Input() color: string = '';
  textColor = '';

  ngOnInit() {
    this.colorsService.loadColors();
  }

  ngOnChanges() {
    this.textColor = this.calculateBrightness(this.color);
  }

  calculateBrightness(color: string): string {
    if (chroma.deltaE(color, '#000') < 50) {
      return '#ffffff';
    } else {
      return '#000000';
    }
  }

  CopyToClipboard() {
    navigator.clipboard.writeText(this.color);
  }
}
