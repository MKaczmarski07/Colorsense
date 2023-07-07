import { Component } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public filterService: FilterService) {}

  ngOnInit() {
    this.filterService.isFilterAvinable = false;
    this.filterService.isFilterActive = false;
  }
}
