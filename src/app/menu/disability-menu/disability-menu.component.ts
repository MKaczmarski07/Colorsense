import { Component } from '@angular/core';
import { FilterService } from '../../filter.service';

@Component({
  selector: 'app-disability-menu',
  templateUrl: './disability-menu.component.html',
  styleUrls: ['./disability-menu.component.scss'],
})
export class DisabilityMenuComponent {
  constructor(public filterService: FilterService) {}
}
