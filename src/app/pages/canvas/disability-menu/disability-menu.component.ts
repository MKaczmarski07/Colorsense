import { Component, HostListener } from '@angular/core';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-disability-menu',
  templateUrl: './disability-menu.component.html',
  styleUrls: ['./disability-menu.component.scss'],
})
export class DisabilityMenuComponent {
  constructor(public filterService: FilterService) {}
  isMenuVisible = false;
  clickCount = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.filterService.isMenuForcedToOpen) {
        this.showMenu();
        this.filterService.isMenuForcedToOpen = false;
      }
    }, 100);
  }

  showMenu() {
    const menu = document.querySelector('.disabilityMenu') as HTMLElement;
    menu.classList.toggle('menueVisible');
    this.isMenuVisible = !this.isMenuVisible;
  }

  //Close the menu when clicking outside
  @HostListener('document:click', ['$event'])
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

  //Close the menu when scrolling
  @HostListener('document:wheel', ['$event'])
  onScroll() {
    if (this.isMenuVisible) {
      this.showMenu();
    }
  }

  //Close the menu when scrolling on mobile devices
  @HostListener('touchmove', ['$event'])
  onTouchMove() {
    if (this.isMenuVisible) {
      this.showMenu();
    }
  }
}
