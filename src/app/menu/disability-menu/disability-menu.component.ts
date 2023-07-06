import { Component, HostListener } from '@angular/core';
import { FilterService } from '../../filter.service';

@Component({
  selector: 'app-disability-menu',
  templateUrl: './disability-menu.component.html',
  styleUrls: ['./disability-menu.component.scss'],
})
export class DisabilityMenuComponent {
  constructor(public filterService: FilterService) {}
  clickCount = 0;

  @HostListener('document:click', ['$event']) //Close the menu when clicking outside
  onClick(event: MouseEvent) {
    this.clickCount++;
    const target = event.target as HTMLElement;
    if (!target.closest('.disabilityMenu') && this.clickCount > 1) {
      this.filterService.isMenuVisible = false;
      this.clickCount = 0;
    }
  }

  @HostListener('document:wheel', ['$event']) //Close the menu when scrolling
  onScroll() {
    this.filterService.isMenuVisible = false;
  }
}
