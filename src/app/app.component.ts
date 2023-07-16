import { Component, AfterViewInit } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initializeSmoothScrollbar();
  }
}
