import {Component} from '@angular/core';
import {Recipe} from "../../../data/recipe";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-search-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  searchValue: string = "";
  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute, private foodService: FoodService) {
    this.searchValue = <string>this.route.snapshot.paramMap.get('param');
    if (this.searchValue != "" && this.searchValue != null) {
        this.searchRecipes(this.searchValue);
    } else {
        this.searchRecipes("");
    }
  }

  searchRecipes: any = (query: string) => {
    this.foodService.searchRecipes(query)
        .subscribe(data => {
              console.log(data);
              if (data.results.length == 0) {
                alert("No recipes found for " + query);
              } else {
                this.recipes = data.results.map((recipe: any) => new Recipe("food", recipe));
              }
            },
            (error: any) => {
              console.error("An error occurred:", error);
              alert(error.error.message);
            });
  }
}
