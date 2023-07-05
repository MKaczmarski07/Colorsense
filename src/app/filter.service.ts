import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  isFilterActive: boolean = false;
  blinder = require('color-blind');
  filteredColors = {
    backgroundColor: '',
    primaryColor: '',
    secondaryColor: '',
    textColor: '',
    buttonTextColor: '',
    formColor: '',
  };

  saveFilteredColors() {
    localStorage.setItem('filteredColors', JSON.stringify(this.filteredColors));
  }

  saveSettings() {
    let settings = {
      isFilterActive: this.isFilterActive,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  loadSettings() {
    let loadedSettings = JSON.parse(localStorage.getItem('settings')!);
    if (loadedSettings) {
    }
  }

  changeDisplayedColors() {
    this.loadFilteredColors();
    // change background color
    const backgroundColor = document.querySelectorAll(
      '.canvas'
    ) as NodeListOf<HTMLElement>;
    if (backgroundColor && this.filteredColors)
      backgroundColor.forEach(
        (e) => (e.style.backgroundColor = this.filteredColors.backgroundColor)
      );
    // change primary color
    const primaryColor = document.querySelectorAll(
      '.primary-color'
    ) as NodeListOf<HTMLElement>;
    if (primaryColor)
      primaryColor.forEach(
        (e) => (e.style.backgroundColor = this.filteredColors.primaryColor)
      );
    // change secondary color
    const secondaryColor = document.querySelectorAll(
      '.secondary-color'
    ) as NodeListOf<HTMLElement>;
    if (secondaryColor)
      secondaryColor.forEach(
        (e) => (e.style.backgroundColor = this.filteredColors.secondaryColor)
      );
    let secondaryAccent = secondaryColor[0].style.backgroundColor;

    if (chroma.deltaE(this.filteredColors.secondaryColor, '#000') < 50) {
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

    // change text color
    const textField = document.querySelectorAll(
      '.textField'
    ) as NodeListOf<HTMLElement>;
    if (textField)
      textField.forEach((e) => (e.style.color = this.filteredColors.textColor));

    let textAccent = textField[0].style.color;
    textAccent = chroma(textAccent).darken(0.9).css();
    console.log(textAccent);
    const textAccentColor = document.querySelectorAll(
      '.textAccent'
    ) as NodeListOf<HTMLElement>;
    if (textAccentColor) {
      textAccentColor.forEach((e) => (e.style.color = textAccent));
    }

    // change button text color
    const buttonTextColor = document.querySelectorAll(
      '.buttonTextColor'
    ) as NodeListOf<HTMLElement>;
    if (buttonTextColor)
      buttonTextColor.forEach(
        (e) => (e.style.color = this.filteredColors.buttonTextColor)
      );
    // change form color
    const formColor = document.querySelectorAll(
      '.formColor'
    ) as NodeListOf<HTMLElement>;
    if (formColor)
      formColor.forEach(
        (e) => (e.style.backgroundColor = this.filteredColors.formColor)
      );
  }

  applyFilter() {
    this.isFilterActive = !this.isFilterActive;
    this.saveSettings();
    if (this.isFilterActive) {
      this.changeDisabilityType('Tritanomaly');
      this.changeDisplayedColors();
    } else {
      this.filteredColors = JSON.parse(localStorage.getItem('colors')!);
      this.saveFilteredColors();
      this.changeDisplayedColors();
    }
  }

  loadFilteredColors() {
    let loadedFilteredColors = JSON.parse(
      localStorage.getItem('filteredColors')!
    );
    if (loadedFilteredColors) {
      this.filteredColors = loadedFilteredColors;
    }
  }

  changeDisabilityType(disability: string) {
    disability = disability.toLowerCase().trim();
    let baseColors = JSON.parse(localStorage.getItem('colors')!);
    this.filteredColors = {
      backgroundColor: this.blinder[disability](baseColors.backgroundColor),
      primaryColor: this.blinder[disability](baseColors.primaryColor),
      secondaryColor: this.blinder[disability](baseColors.secondaryColor),
      textColor: this.blinder[disability](baseColors.textColor),
      buttonTextColor: this.blinder[disability](baseColors.buttonTextColor),
      formColor: this.blinder[disability](baseColors.formColor),
    };
    this.saveFilteredColors();
    this.changeDisplayedColors();
  }
}
