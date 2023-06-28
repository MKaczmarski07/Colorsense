import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  constructor(public colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.loadColors();
    this.colorsService.changeBackground(this.colorsService.backgroundColor);
    this.colorsService.changePrimaryColor(this.colorsService.primaryColor);
    this.colorsService.changeSecondaryColor(this.colorsService.secondaryColor);
    this.colorsService.changeTextColor(this.colorsService.textColor);
    this.colorsService.changeButtonTextColor(
      this.colorsService.buttonTextColor
    );
    this.colorsService.changeFormColor(this.colorsService.formColor);
  }
}
