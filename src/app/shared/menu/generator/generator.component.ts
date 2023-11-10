import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { GeneratorService } from '../../../services/generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  animations: [
    trigger('dialog', [
      // animate in
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.8)',
        }),
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 1,
            transform: 'scale(1)',
          })
        ),
      ]),

      // animate out
      transition(':leave', [
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 0,
            transform: 'scale(0.8)',
          })
        ),
      ]),
    ]),
    trigger('background', [
      // animate in
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 1,
          })
        ),
      ]),

      // animate out
      transition(':leave', [
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class GeneratorComponent {
  constructor(public generatorService: GeneratorService) {}
  clickCount = 0;

  // Prevent scrolling when the dialog is open
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
  }
  // Prevent scrolling on mobile devices when the dialog is open
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    event.preventDefault();
  }

  //Close the dialog when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dialog') && this.generatorService.isCongigOpen) {
      // first click will not close the dialog ( required to open the dialog properly)
      this.clickCount++;
      if (this.clickCount === 2) {
        // second click will close the dialog and reset the click count
        this.generatorService.isCongigOpen = false;
        this.clickCount = 0;
      }
    }
  }
}
