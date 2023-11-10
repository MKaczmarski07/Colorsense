import { Component, AfterViewInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { Meta } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggleVisibility', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  isLoaderVisible = true;
  constructor(private scrollService: ScrollService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Generate color palettes, check contrast, simulate color blindness and test your colors on real UI elements',
      },
      {
        name: 'keywords',
        content:
          'colorsense, colors, color palette, color generator, color palette generator, contrast check, color blindness simulator',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoaderVisible = false;
    }, 1000);
    if (window.innerWidth > 768 && this.scrollService.checkBrowser()) {
      this.scrollService.initializeSmoothScrollbar();
      document.querySelector('.smooth-scroll')?.classList.add('scroll-offset');
    }
  }
}
