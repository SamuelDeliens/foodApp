import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchValue: string = '';
  recipes: any = [];

  constructor(private route: ActivatedRoute, private foodService: FoodService) {
    this.searchValue = <string>this.route.snapshot.paramMap.get('param');

    console.log(this.searchValue);
    if (this.searchValue != "") {
      this.searchRecipes();
    }
  }

  searchRecipes(): void {
    this.foodService.searchRecipes(this.searchValue)
        .subscribe(data => {
          this.recipes = data.results;
          console.log(typeof data);
          console.log(data);
        });
  }
}
