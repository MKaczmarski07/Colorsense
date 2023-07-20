import { Component, AfterViewInit } from '@angular/core';
import { ScrollService } from './scroll.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
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
    console.log('App component initialized');
    if (window.innerWidth > 768) {
      this.scrollService.initializeSmoothScrollbar();
      document.querySelector('.smooth-scroll')?.classList.add('scroll-offset');
    }
  }
}
