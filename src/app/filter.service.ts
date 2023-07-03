import { Injectable } from '@angular/core';
import * as chroma from 'chroma-js';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isFilterActive: boolean = false;
  blinder = require('color-blind');

  constructor() {}

  Deuteranomaly(color: string) {
    const filteredColor = this.blinder.deuteranomaly(color);
    const testElement = document.querySelectorAll(
      '.test'
    ) as NodeListOf<HTMLElement>;
    if (testElement)
      testElement.forEach(
        (e) => (e.style.backgroundColor = chroma(filteredColor).css())
      );
    console.log(filteredColor);
  }
}
