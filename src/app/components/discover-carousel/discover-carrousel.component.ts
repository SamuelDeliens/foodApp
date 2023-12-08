import {Component, Input} from '@angular/core';
import {SharedSearchService} from "../../services/shared-search.service";
import {Recipe} from "../../data/recipe";

@Component({
  selector: 'app-discover-carrousel',
  templateUrl: './discover-carrousel.component.html',
  styleUrls: ['./discover-carrousel.component.css']
})
export class DiscoverCarrouselComponent {

  @Input()
  recipes: Recipe[] = [];

  constructor(private sharedSearchService: SharedSearchService) {
    this.recipes = this.sharedSearchService.recipes;
  }
}
