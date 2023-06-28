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

  changeBackground(color: string) {
    document.body.style.backgroundColor = color;
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
    if (textPicker) textPicker[0].style.backgroundColor = color;

    this.saveColors();
  }

  saveColors() {
    let colors = {
      backgroundColor: this.backgroundColor,
      primaryColor: this.primaryColor,
      secondaryColor: this.secondaryColor,
      textColor: this.textColor,
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
    }
  }
}
