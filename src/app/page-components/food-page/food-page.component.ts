import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../data/recipe";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../../services/food.service";
import {Subscription} from "rxjs";
import {FilterService} from "../../services/filter.service";

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
    from: number = 1;

    constructor(
        private route: ActivatedRoute,
        public foodService: FoodService,
        private foodFilterService: FilterService
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

        this.foodService.searchRecipes(query, tags, ((this.from - 1) * 20).toString())
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

    previousPage() {
        let newFrom = this.from;
        newFrom--;
        if (newFrom <= 0) {return;}
        this.from = newFrom;
        this.searchRecipes(this.searchValue);
    }

    nextPage() {
        this.from++;
        this.searchRecipes(this.searchValue);
    }
}
