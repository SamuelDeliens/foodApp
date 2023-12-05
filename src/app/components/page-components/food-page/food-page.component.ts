import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../../data/recipe";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {FoodFilterService} from "../../../services/food-filter.service";

@Component({
  selector: 'app-search-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit, OnDestroy {

    @Input()
    searchValue: string = "";
    recipes: Recipe[] = [];
    subscription: Subscription = new Subscription();
    selectedFilters: Array<any> = [];
    from: number = 0;

    constructor(
        private route: ActivatedRoute,
        private foodService: FoodService,
        private foodFilterService: FoodFilterService
    ) {
        if (this.searchValue != "" && this.searchValue != null) {
            this.searchRecipes(this.searchValue);
        } else {
            this.searchRecipes("");
        }
    }

    ngOnInit(): void {
        this.subscription =
            this.foodFilterService.selectedFilters.subscribe(selectedFilters => {
                this.selectedFilters = selectedFilters;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    searchRecipes: any = (query: string) => {
        let tags: string = "";
        for (let filter of this.selectedFilters) {
            tags += filter.value + ",";
        }

        this.foodService.searchRecipes(query, tags, this.from.toString())
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
