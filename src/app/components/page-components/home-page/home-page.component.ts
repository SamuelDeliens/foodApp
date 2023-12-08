import {Component, Input, OnInit} from '@angular/core';
import { AppComponent } from "../../../app.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import {Router} from "@angular/router";
import { CocktailService } from 'src/app/services/cocktail.service';
import { FoodService } from 'src/app/services/food.service';
import { Recipe } from 'src/app/data/recipe';
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchBarComponent]
})
export class HomePageComponent implements OnInit {
  protected readonly Array = Array;
  protected readonly Math = Math;

  @Input()
  searchFoodFeed:any = Array<Recipe>();
  searchCocktailFeed:any = Array<Recipe>();

  constructor(
      private appComponent: AppComponent,
      private router: Router,
      private foodService:FoodService,
      private cocktailService:CocktailService
  ) {
  }

  ngOnInit(): void {
    this.cocktailService.searchLatestCocktails().subscribe((data) =>{
      this.searchCocktailFeed = data.drinks.map((cocktail:any)=> new Recipe("cocktail", cocktail));
      console.log('Cocktails récupérées :', this.searchCocktailFeed);
    });
    this.foodService.feedList().subscribe((data)=>{
      data.results = data.results.slice(data.results.length - 10, data.results.length);
      this.searchFoodFeed = data.results.map((recipe:any)=> new Recipe("food", recipe.item));
      console.log('Cocktails récupérées :', this.searchFoodFeed);
    })
  }

  navigateToSearchPage: any = (query: string) => {
    forkJoin([
        this.cocktailService.searchName(query),
        this.foodService.searchRecipes(query, "", "0", "10")
    ]).subscribe(([cocktaildata, foodData]) => {
      let path = '';
      console.log(cocktaildata, foodData);
      if (cocktaildata.drinks == null && foodData.results == null) {
        alert("Aucun résultat trouvé");
        return;
      }
      else {
        if (cocktaildata.drinks == null) {
          path = 'food';
        } else if (foodData.results == null) {
            path = 'cocktail';
        } else if (cocktaildata.drinks.length <= foodData.results.length) {
            path = 'food';
        } else {
            path = 'cocktail';
        }
      }
      this.router.navigate([path, query]);
    });
  }

  navigateToRecipeDetails(id: string, type: string) {
    this.router.navigate(['/recipe/' + type, id]);
  }
}
