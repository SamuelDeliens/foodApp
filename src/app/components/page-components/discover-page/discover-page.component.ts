import { Component } from '@angular/core';
import {Recipe} from "../../../data/recipe";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {SharedSearchService} from "../../../services/shared-search.service";
import {CocktailService} from "../../../services/cocktail.service";

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent {
  foodRecipes: Recipe[] = [];
  cocktailRecipes: Recipe[] = [];

  constructor(private foodService: FoodService, private cocktailService: CocktailService) {
      this.searchRecipes("");
  }

  searchRecipes = (query: string) => {
      this.searchFoodRecipes();
      this.searchCocktailRecipes();
  }

  searchFoodRecipes: any = (query: string) => {
    this.foodService.searchRecipes(query)
        .subscribe(data => {
              console.log(data);
              if (data.results.length == 0) {
                alert("No recipes found for " + query);
              } else {
                this.foodRecipes = data.results.map((recipe: any) => new Recipe("food", recipe));
              }
            },
            (error: any) => {
              console.error("An error occurred:", error);
              alert(error.error.message);
        });
    }

    searchCocktailRecipes: any = (query: string) => {
        this.cocktailService.searchName(query)
            .subscribe(data => {
                    console.log(data);
                    if (data.drinks.length == 0) {
                        alert("No recipes found for " + query);
                    } else {
                        this.cocktailRecipes = data.drinks.map((recipe: any) => new Recipe("cocktail", recipe));
                    }
                },
                (error: any) => {
                    console.error("An error occurred:", error);
                    alert(error.error.message);
                });
    }
}
