import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  constructor(public colorsService: ColorsService) {}
  backgroundColor: string = '#7986CB';
  primaryColor: string = '#1a172c';
  secondaryColor: string = '#3F51B5';
  textColor: string = '#fff';

  ngOnInit() {
    this.colorsService.changeTextColor(this.colorsService.textColor);
    this.colorsService.changeBackground(this.colorsService.backgroundColor);
    this.colorsService.changePrimaryColor(this.colorsService.primaryColor);
    this.colorsService.changeSecondaryColor(this.colorsService.secondaryColor);
  }
}
