import { Component, OnInit } from '@angular/core';
import * as chroma from 'chroma-js';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  backgroundColor: string = '#7986CB';
  primaryColor: string = '#1a172c';
  secondaryColor: string = '#64748b';
  textColor: string = '#fff';

  ngOnInit() {
    this.changeTextColor('white');
    this.changeBackground('#1a172c');
    this.changePrimaryColor('#312a5f');
    this.changeSecondaryColor('#64748b');
  }

  changeBackground(color: string) {
    document.body.style.backgroundColor = color;
  }

  changePrimaryColor(color: string) {
    const primaryColor = document.querySelectorAll(
      '.canvas-elem'
    ) as NodeListOf<HTMLElement>;
    if (primaryColor)
      primaryColor.forEach((e) => (e.style.backgroundColor = color));
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
    textAccent = chroma(textAccent).darken(0.7).css();
    console.log(textAccent);
    const textAccentColor = document.querySelectorAll(
      '.textAccent'
    ) as NodeListOf<HTMLElement>;
    if (textAccentColor) {
      textAccentColor.forEach((e) => (e.style.color = textAccent));
    }
  }
}
