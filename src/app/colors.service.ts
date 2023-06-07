import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor() {}
  backgroundColor: string = '#7986CB';
  primaryColor: string = '#1a172c';
  secondaryColor: string = '#3F51B5';
  textColor: string = '#fff';

  changeBackground(color: string) {
    document.body.style.backgroundColor = color;
    const backgroundColorPicker = document.querySelectorAll(
      '.backgroundColorPicker'
    ) as NodeListOf<HTMLElement>;
    if (backgroundColorPicker)
      backgroundColorPicker[0].style.backgroundColor = color;
  }

  changePrimaryColor(color: string) {
    const primaryColor = document.querySelectorAll(
      '.canvas-elem'
    ) as NodeListOf<HTMLElement>;
    if (primaryColor)
      primaryColor.forEach((e) => (e.style.backgroundColor = color));

    let primaryAccent = primaryColor[0].style.backgroundColor;

    // if color is in the form of text (e.g. 'white'), convert it to rgb
    if (!primaryAccent.startsWith('rgb')) {
      primaryAccent = chroma(primaryAccent).css();
    }

    // make primaryAccentColor 70% opacity of primary color
    primaryAccent = chroma(primaryAccent).darken(0.7).css();
    console.log(primaryAccent);
    const primaryAccentColor = document.querySelectorAll(
      '.primaryAccent'
    ) as NodeListOf<HTMLElement>;
    if (primaryAccentColor) {
      primaryAccentColor.forEach(
        (e) => (e.style.backgroundColor = primaryAccent)
      );
    }
  }

  changeSecondaryColor(color: string) {
    const secondaryColor = document.querySelectorAll(
      '.secondary-color'
    ) as NodeListOf<HTMLElement>;
    if (secondaryColor)
      secondaryColor.forEach((e) => (e.style.backgroundColor = color));
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
  }
}
