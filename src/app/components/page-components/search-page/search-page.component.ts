import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FoodService} from "../../../services/food.service";
import {SharedSearchService} from "../../../services/shared-search.service";
import {Recipe} from "../../../data/recipe";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {

    recipes: Recipe[] = [];

    constructor(private route: ActivatedRoute, private foodService: FoodService, private sharedSearchService: SharedSearchService) {
        this.sharedSearchService.setSearchValue(<string>this.route.snapshot.paramMap.get('param'));
        if (this.sharedSearchService.searchValue != "" && this.sharedSearchService.searchValue != null) {
            this.searchRecipes(this.sharedSearchService.searchValue);
        }
    }

    searchRecipes: any = (query: string) => {
        this.foodService.searchRecipes(query)
            .subscribe(data => {
                console.log(data);
                if (data.results.length == 0) {
                    alert("No recipes found for " + query);
                } else {
                    this.sharedSearchService.setRecipes(
                        data.results.map((recipe: any) => new Recipe("food", recipe))
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