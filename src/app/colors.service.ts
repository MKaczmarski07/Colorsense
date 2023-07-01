import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor() {}
  backgroundColor: string = '#7986CB';
  primaryColor: string = '#3F51B5';
  secondaryColor: string = '#1a172c';
  textColor: string = '#fff';
  buttonTextColor: string = '#fff';
  formColor: string = '#fff';

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
      backgroundColorPicker[0].style.backgroundColor = color;
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
      secondaryAccent = chroma(secondaryAccent).darken(-0.4).css();
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

    this.saveColors();
  }

  changePrimaryColor(color: string) {
    const primaryColor = document.querySelectorAll(
      '.primary-color'
    ) as NodeListOf<HTMLElement>;
    if (primaryColor)
      primaryColor.forEach((e) => (e.style.backgroundColor = color));
    this.saveColors();
  }

  changeTextColor(color: string) {
    // if no color is passed, default color is white
    if (color.length === 0) color = 'white';
    // change text color of all text fields
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
    console.log(textAccent);
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
    this.backgroundColor = '#7986CB';
    this.primaryColor = '#3F51B5';
    this.secondaryColor = '#1a172c';
    this.textColor = '#fff';
    this.buttonTextColor = '#fff';
    this.formColor = '#fff';
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
    let loadedColors = JSON.parse(localStorage.getItem('colors')!);
    if (loadedColors) {
      this.backgroundColor = loadedColors.backgroundColor;
      this.primaryColor = loadedColors.primaryColor;
      this.secondaryColor = loadedColors.secondaryColor;
      this.textColor = loadedColors.textColor;
      this.buttonTextColor = loadedColors.buttonTextColor;
      this.formColor = loadedColors.formColor;
    }
  }

  checkContrast(
    color1: string,
    color2: string,
    className: string,
    type: string
  ) {
    let contrast = chroma.contrast(color1, color2);
    contrast = Math.round(contrast * 100) / 100;
    className = '.' + className;
    const contrastRatio = document.querySelectorAll(
      className
    ) as NodeListOf<HTMLElement>;
    if (contrast > 4.5) {
      contrastRatio[0].style.color = '#4BB543';
    } else {
      contrastRatio[0].style.color = '#FF0000';
    }
    return contrast;
  }

  // saveSettings() {
  //   let settings = {
  //   };
  //   localStorage.setItem('settings', JSON.stringify(settings));
  // }

  // loadSettings() {
  //   let loadedSettings = JSON.parse(localStorage.getItem('settings')!);
  //   if (loadedSettings) {

  //   }
  // }
}
