import {Component, Input} from '@angular/core';
import {SharedSearchService} from "../../services/shared-search.service";
import {Recipe} from "../../data/recipe";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {

  @Input()
  recipes: Recipe[] = [];

  constructor(private sharedSearchService: SharedSearchService) {
    this.recipes = this.sharedSearchService.recipes;
  }
}
