import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedSearchService} from "../../../services/shared-search.service";
import {Recipe} from "../../../data/recipe";

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent {

  private idRecipe: string = "";
  @Input()
  recipe: Recipe = new Recipe({});

  constructor(private route: ActivatedRoute, private sharedSearchService: SharedSearchService) {
    this.idRecipe = <string>this.route.snapshot.paramMap.get('param');
    this.recipe = this.sharedSearchService.currentRecipe;
  }

}
