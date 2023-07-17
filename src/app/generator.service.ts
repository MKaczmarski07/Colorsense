import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';
import { ColorsService } from './colors.service';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor(private colorsService: ColorsService) {}
  isCongigOpen = false;
  generateMethod: 'complementary' | 'monochromatic' | 'light' | 'dark' =
    'complementary';
  colors = {
    backgroundColor: '',
    primaryColor: '',
    secondaryColor: '',
    textColor: '',
    buttonTextColor: '',
    formColor: '',
  };

  generateColors() {
    if (
      this.generateMethod === 'complementary' ||
      this.generateMethod === 'monochromatic'
    ) {
      this.colors.backgroundColor = chroma.random().hex();
      // check saturation
      if (chroma(this.colors.backgroundColor).get('hsl.s') > 0.5) {
        this.colors.backgroundColor = chroma(this.colors.backgroundColor)
          .desaturate(2)
          .hex();
      }

      // check if the color is light or dark
      if (chroma.deltaE(this.colors.backgroundColor, '#000') < 50) {
        this.colors.secondaryColor = chroma(this.colors.backgroundColor)
          .brighten(0.4)
          .hex();
        this.colors.textColor = '#fff';
        this.colors.formColor = chroma(this.colors.backgroundColor)
          .brighten(0.2)
          .hex();
      } else {
        this.colors.secondaryColor = chroma(this.colors.backgroundColor)
          .darken(0.4)
          .hex();
        this.colors.textColor = '#000';
        this.colors.formColor = chroma(this.colors.backgroundColor)
          .darken(0.2)
          .hex();
      }
      if (this.generateMethod === 'complementary') {
        this.colors.primaryColor = this.findComplementaryColor(
          this.colors.backgroundColor
        );
      }

      if (this.generateMethod === 'monochromatic') {
        if (chroma.deltaE(this.colors.secondaryColor, '#000') < 50) {
          this.colors.primaryColor = chroma(this.colors.secondaryColor)
            .brighten(0.6)
            .hex();
        } else {
          this.colors.primaryColor = chroma(this.colors.secondaryColor)
            .darken(0.6)
            .hex();
        }
      }

      if (chroma.deltaE(this.colors.primaryColor, '#000') < 50) {
        this.colors.buttonTextColor = '#fff';
      } else {
        this.colors.buttonTextColor = '#000';
      }
    }
    if (this.generateMethod === 'light') {
      const backgroundScale = chroma.scale(['#fff', '#F6F6F6']);
      this.colors.backgroundColor = backgroundScale(Math.random()).hex();
      this.colors.secondaryColor = chroma(this.colors.backgroundColor)
        .darken(0.2)
        .hex();
      this.colors.textColor = '#000';
      this.colors.formColor = chroma(this.colors.secondaryColor)
        .darken(0.2)
        .hex();

      this.colors.primaryColor = chroma.random().hex();

      // check if the color is light or dark
      this.colors.buttonTextColor =
        chroma.deltaE(this.colors.primaryColor, '#000') < 50 ? '#fff' : '#000';
    }
    if (this.generateMethod === 'dark') {
      const backgroundScale = chroma.scale(['#000', '#363354', '#1A1D37']);
      this.colors.backgroundColor = backgroundScale(Math.random()).hex();

      this.colors.secondaryColor = chroma(this.colors.backgroundColor)
        .brighten(0.4)
        .hex();
      this.colors.textColor = '#fff';
      this.colors.formColor = chroma(this.colors.backgroundColor)
        .brighten(0.2)
        .hex();
      this.colors.primaryColor = chroma.random().hex();

      // check if the primary color is light or dark
      this.colors.buttonTextColor =
        chroma.deltaE(this.colors.primaryColor, '#000') < 50 ? '#fff' : '#000';
    }

    this.checkGeneratedColors();
  }

  checkGeneratedColors() {
    const checkContrast = setInterval(() => {
      if (this.generateMethod === 'dark') {
        if (
          chroma(this.colors.primaryColor).get('hsl.s') > 0.6 ||
          this.colorsService.checkContrast(
            this.colors.secondaryColor,
            this.colors.primaryColor
          ) < 8
        ) {
          this.generateColors();
          return;
        }
      }
      if (this.generateMethod === 'light') {
        if (
          (chroma(this.colors.primaryColor).get('hsl.s') > 0.55 &&
            chroma(this.colors.primaryColor).get('hsl.s') < 0.3) ||
          this.colorsService.checkContrast(
            this.colors.secondaryColor,
            this.colors.primaryColor
          ) < 8 ||
          chroma.deltaE(this.colors.primaryColor, '#000') < 20
        ) {
          this.generateColors();
          return;
        }
      }

      if (
        this.colorsService.checkContrast(
          this.colors.secondaryColor,
          this.colors.textColor
        ) > 7 &&
        this.colorsService.checkContrast(
          this.colors.primaryColor,
          this.colors.buttonTextColor
        ) > 7
      ) {
        clearInterval(checkContrast);
        this.changeColors(this.colors);
      } else {
        this.generateColors();
      }
    }, 1);
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

  changeColors(colors: object) {
    localStorage.setItem('colors', JSON.stringify(colors));
    this.colorsService.loadColors();
  }

  saveSettings() {
    localStorage.setItem('GenerateMethod', JSON.stringify(this.generateMethod));
  }

  loadSettings() {
    let loadedSettings = JSON.parse(localStorage.getItem('GenerateMethod')!);
    if (loadedSettings) {
      this.generateMethod = loadedSettings;
    }
  }
}
