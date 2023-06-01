import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  ngOnInit() {
    this.changeTextColor('white');
    this.changeBackground('#1a172c');
    this.changePrimaryColor('#312a5f');
    this.changeSecondaryColor('#64748b');
  }

  changeTextColor(color: string) {
    const textField = document.querySelectorAll(
      '.textField'
    ) as NodeListOf<HTMLElement>;
    if (textField) textField.forEach((e) => (e.style.color = color));
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
}
