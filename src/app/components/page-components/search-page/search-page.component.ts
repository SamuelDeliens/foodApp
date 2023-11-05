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
      if (this.sharedSearchService.searchValue != "") {
        this.searchRecipes(this.sharedSearchService.searchValue);
      }
  }

  searchRecipes: any = (query: string) => {
      this.foodService.searchRecipes(query)
          .subscribe(data => {
              this.recipes = data.results;
              console.log(typeof data);
              console.log(data);
          });
  }

}
