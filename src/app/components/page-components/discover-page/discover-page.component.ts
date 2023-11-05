import { Component } from '@angular/core';
import {Recipe} from "../../../data/recipe";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {SharedSearchService} from "../../../services/shared-search.service";

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent {
  recipes: Recipe[] = [];

  constructor(private foodService: FoodService, private sharedSearchService: SharedSearchService) {
    this.searchRecipes("");
  }

  searchRecipes: any = (query: string) => {
    this.foodService.searchRecipes(query)
        .subscribe(data => {
              console.log(data);
              if (data.results.length == 0) {
                alert("No recipes found for " + query);
              } else {
                this.sharedSearchService.setRecipes(
                    data.results.map((recipe: any) => new Recipe(recipe))
                );
                this.recipes = this.sharedSearchService.recipes;
              }
            },
            (error: any) => {
              console.error("An error occurred:", error);
              alert(error.error.message);
        });
    }
}
