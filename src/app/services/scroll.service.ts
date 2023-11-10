import { Injectable } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import * as Bowser from 'bowser';

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

  checkBrowser() {
    // Check browser support for smooth-scrollbar library
    const browser = Bowser.getParser(window.navigator.userAgent);
    const isValidBrowser = browser.satisfies({
      chrome: '>=22',
      firefox: '>=16',
      opera: '>=22',
      safari: '>=8',
      'internet explorer': '>=10',
      'android browser': '>=4',
    });
    return isValidBrowser;
  }
}
