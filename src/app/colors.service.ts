import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor(public filterService: FilterService) {}
  backgroundColor: string = '#F8F4EA';
  primaryColor: string = '#579BB1';
  secondaryColor: string = '#ECE8DD';
  textColor: string = '#37474f';
  buttonTextColor: string = '#ffffff';
  formColor: string = '#E1D7C6';

  textToBackgroundRatio: number = 0;
  textToSecondaryRatio: number = 0;
  buttonTextRatio: number = 0;

  changeBackground(color: string) {
    const backgroundColor = document.querySelectorAll(
      '.canvas'
    ) as NodeListOf<HTMLElement>;
    if (backgroundColor)
      backgroundColor.forEach((e) => (e.style.backgroundColor = color));

    const backgroundColorPicker = document.querySelectorAll(
      '.backgroundColorPicker'
    ) as NodeListOf<HTMLElement>;
    if (backgroundColorPicker)
      backgroundColorPicker.forEach((e) => (e.style.backgroundColor = color));

    this.textToBackgroundRatio = this.checkContrast(
      this.textColor,
      this.backgroundColor
    );

    this.saveColors();
  }

  changeSecondaryColor(color: string) {
    const secondaryColor = document.querySelectorAll(
      '.secondary-color'
    ) as NodeListOf<HTMLElement>;
    if (secondaryColor)
      secondaryColor.forEach((e) => (e.style.backgroundColor = color));

    let secondaryAccent = secondaryColor[0].style.backgroundColor;

    // if color is in the form of text (e.g. 'white'), convert it to rgb
    if (!secondaryAccent.startsWith('rgb')) {
      secondaryAccent = chroma(secondaryAccent).css();
    }

    // Check if color is light or dark and set proper accent color
    if (chroma.deltaE(color, '#000') < 50) {
      secondaryAccent = chroma(secondaryAccent).brighten(0.4).css();
    } else {
      secondaryAccent = chroma(secondaryAccent).darken(0.4).css();
    }

    const secondaryAccentColor = document.querySelectorAll(
      '.secondaryAccent'
    ) as NodeListOf<HTMLElement>;
    if (secondaryAccentColor) {
      secondaryAccentColor.forEach(
        (e) => (e.style.backgroundColor = secondaryAccent)
      );
    }

    const secondaryColorPicker = document.querySelectorAll(
      '.secondaryColorPicker'
    ) as NodeListOf<HTMLElement>;
    if (secondaryColorPicker)
      secondaryColorPicker.forEach((e) => (e.style.backgroundColor = color));

    this.textToSecondaryRatio = this.checkContrast(
      this.textColor,
      this.secondaryColor
    );

    this.saveColors();
  }

  changePrimaryColor(color: string) {
    const primaryColor = document.querySelectorAll(
      '.primary-color'
    ) as NodeListOf<HTMLElement>;
    if (primaryColor)
      primaryColor.forEach((e) => (e.style.backgroundColor = color));

    this.buttonTextRatio = this.checkContrast(
      this.buttonTextColor,
      this.primaryColor
    );

    const primaryColorPicker = document.querySelectorAll(
      '.primaryColorPicker'
    ) as NodeListOf<HTMLElement>;
    if (primaryColorPicker)
      primaryColorPicker.forEach((e) => (e.style.backgroundColor = color));

    this.saveColors();
  }

  changeTextColor(color: string) {
    const textField = document.querySelectorAll(
      '.textField'
    ) as NodeListOf<HTMLElement>;
    if (textField) textField.forEach((e) => (e.style.color = color));

    let textAccent = textField[0].style.color;

    // if color is in the form of text (e.g. 'white'), convert it to rgb
    if (!textAccent.startsWith('rgb')) {
      textAccent = chroma(textAccent).css();
    }
    // make textAccentColor 70% opacity of text color
    textAccent = chroma(textAccent).darken(0.9).css();
    const textAccentColor = document.querySelectorAll(
      '.textAccent'
    ) as NodeListOf<HTMLElement>;
    if (textAccentColor) {
      textAccentColor.forEach((e) => (e.style.color = textAccent));
    }

    //Change color of the picker
    const textPicker = document.querySelectorAll(
      '.textPicker'
    ) as NodeListOf<HTMLElement>;
    if (textPicker) textPicker.forEach((e) => (e.style.background = color));

    // Change color of the borders
    const borderColor = document.querySelectorAll(
      '.borderColor'
    ) as NodeListOf<HTMLElement>;
    if (borderColor) borderColor.forEach((e) => (e.style.borderColor = color));

    // change color of the placeholder

    this.textToBackgroundRatio = this.checkContrast(
      this.textColor,
      this.backgroundColor
    );
    this.textToSecondaryRatio = this.checkContrast(
      this.textColor,
      this.secondaryColor
    );
    this.saveColors();
  }

  changeButtonTextColor(color: string) {
    const buttonTextColor = document.querySelectorAll(
      '.buttonTextColor'
    ) as NodeListOf<HTMLElement>;
    if (buttonTextColor)
      buttonTextColor.forEach((e) => (e.style.color = color));

    const buttonColorPicker = document.querySelectorAll(
      '.buttonColorPicker'
    ) as NodeListOf<HTMLElement>;
    if (buttonColorPicker) buttonColorPicker[0].style.backgroundColor = color;

    this.buttonTextRatio = this.checkContrast(
      this.buttonTextColor,
      this.primaryColor
    );

    this.saveColors();
  }

  changeFormColor(color: string) {
    const formColor = document.querySelectorAll(
      '.formColor'
    ) as NodeListOf<HTMLElement>;
    if (formColor) formColor.forEach((e) => (e.style.backgroundColor = color));
    const formColorPicker = document.querySelectorAll(
      '.formColorPicker'
    ) as NodeListOf<HTMLElement>;
    if (formColorPicker) formColorPicker[0].style.backgroundColor = color;

    this.saveColors();
  }

  resetColors() {
    this.backgroundColor = '#F8F4EA';
    this.primaryColor = '#579BB1';
    this.secondaryColor = '#ECE8DD';
    this.textColor = '#37474f';
    this.buttonTextColor = '#ffffff';
    this.formColor = '#F8F4EA';
    this.saveColors();
  }

  saveColors() {
    let colors = {
      backgroundColor: this.backgroundColor,
      primaryColor: this.primaryColor,
      secondaryColor: this.secondaryColor,
      textColor: this.textColor,
      buttonTextColor: this.buttonTextColor,
      formColor: this.formColor,
    };
    localStorage.setItem('colors', JSON.stringify(colors));
  }

  loadColors() {
    if (this.filterService.isFilterActive) {
    }
    let loadedColors = JSON.parse(localStorage.getItem('colors')!);
    if (loadedColors) {
      this.backgroundColor = loadedColors.backgroundColor;
      this.primaryColor = loadedColors.primaryColor;
      this.secondaryColor = loadedColors.secondaryColor;
      this.textColor = loadedColors.textColor;
      this.buttonTextColor = loadedColors.buttonTextColor;
      this.formColor = loadedColors.formColor;
    }
    this.changeBackground(this.backgroundColor);
    this.changePrimaryColor(this.primaryColor);
    this.changeSecondaryColor(this.secondaryColor);
    this.changeTextColor(this.textColor);
    this.changeButtonTextColor(this.buttonTextColor);
    this.changeFormColor(this.formColor);
  }

  checkContrast(color1: string, color2: string) {
    let contrast = chroma.contrast(color1, color2);
    contrast = Math.round(contrast * 100) / 100;

    return contrast;
  }
}
