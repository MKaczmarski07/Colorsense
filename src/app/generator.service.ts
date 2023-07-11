import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';
import { ColorsService } from './colors.service';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor(private colorsService: ColorsService) {}
  colors = {
    backgroundColor: '',
    primaryColor: '',
    secondaryColor: '',
    textColor: '',
    buttonTextColor: '',
    formColor: '',
  };

  generateColors() {
    this.colors.backgroundColor = chroma.random().hex();
    // check saturation
    if (chroma(this.colors.backgroundColor).get('hsl.s') > 0.5) {
      this.colors.backgroundColor = chroma(this.colors.backgroundColor)
        .desaturate(2)
        .hex();
      console.log(chroma(this.colors.backgroundColor).get('hsl.s'));
    }

    // check if the color is light or dark
    if (chroma.deltaE(this.colors.backgroundColor, '#000') < 50) {
      this.colors.secondaryColor = chroma(this.colors.backgroundColor)
        .brighten(0.4)
        .css();
      this.colors.textColor = '#fff';
      this.colors.formColor = chroma(this.colors.backgroundColor)
        .brighten(0.2)
        .css();
    } else {
      this.colors.secondaryColor = chroma(this.colors.backgroundColor)
        .darken(0.4)
        .css();
      this.colors.textColor = '#000';
      this.colors.formColor = chroma(this.colors.backgroundColor)
        .darken(0.2)
        .css();
    }

    this.colors.primaryColor = this.findComplementaryColor(
      this.colors.backgroundColor
    );
    if (chroma.deltaE(this.colors.primaryColor, '#000') < 50) {
      this.colors.buttonTextColor = '#fff';
    } else {
      this.colors.buttonTextColor = '#000';
    }

    this.checkGeneratedColors();
  }

  changeColors(colors: object) {
    localStorage.setItem('colors', JSON.stringify(colors));
    this.colorsService.loadColors();
  }

  checkGeneratedColors() {
    if (
      this.colorsService.checkContrast(
        this.colors.backgroundColor,
        this.colors.textColor
      ) < 7
    ) {
      console.log('text to background ratio is too low');
    } else {
      this.changeColors(this.colors);
    }
  }

  findComplementaryColor(color: string) {
    let colorRGB = chroma(color).rgb();
    colorRGB = [colorRGB[0] / 255, colorRGB[1] / 255, colorRGB[2] / 255];
    let complementaryColor = [
      1 - colorRGB[0],
      1 - colorRGB[1],
      1 - colorRGB[2],
    ];
    complementaryColor = [
      Math.round(complementaryColor[0] * 255),
      Math.round(complementaryColor[1] * 255),
      Math.round(complementaryColor[2] * 255),
    ];
    return chroma(complementaryColor).hex();
  }
}
