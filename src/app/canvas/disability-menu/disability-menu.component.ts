import { Component, HostListener } from '@angular/core';
import { FilterService } from '../../filter.service';

@Component({
  selector: 'app-disability-menu',
  templateUrl: './disability-menu.component.html',
  styleUrls: ['./disability-menu.component.scss'],
})
export class DisabilityMenuComponent {
  constructor(public filterService: FilterService) {}
  isMenuVisible = false;
  clickCount = 0;

  @HostListener('document:click', ['$event']) //Close the menu when clicking outside
  onClick(event: MouseEvent) {
    this.clickCount++;
    const target = event.target as HTMLElement;
    if (
      !target.closest('.disabilityMenu') &&
      this.clickCount > 1 &&
      this.isMenuVisible
    ) {
      this.showMenu();
      this.clickCount = 0;
    }
  }

  @HostListener('document:wheel', ['$event']) //Close the menu when scrolling
  onScroll() {
    if (this.isMenuVisible) {
      this.showMenu();
    }
  }

  showMenu() {
    const menu = document.querySelector('.disabilityMenu') as HTMLElement;
    menu.classList.toggle('menueVisible');
    this.isMenuVisible = !this.isMenuVisible;
  }
}
