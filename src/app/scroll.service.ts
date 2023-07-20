import { Injectable } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  initializeSmoothScrollbar() {
    const options = {
      damping: 0.1,
      alwaysShowTracks: true,
      continuousScrolling: false,
    };
    let scrollbar = Scrollbar.init(
      document.querySelector('.smooth-scroll') as HTMLElement,
      options
    );

    // remove horizontal scrollbar
    scrollbar.track.xAxis.element.remove();

    // prevent from horizontal scrolling on touch devices
    scrollbar.addListener((status) => {
      if (status.offset.x > 0) {
        scrollbar.setPosition(0, status.offset.y);
      }
    });

    return scrollbar;
  }
}
