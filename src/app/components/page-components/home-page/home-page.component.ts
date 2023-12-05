import { Component } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import {Router} from "@angular/router";
import { FeedService } from 'src/app/services/feed.service';
import { CocktailService } from 'src/app/services/cocktail.service';
import { FoodService } from 'src/app/services/food.service';
import { Recipe } from 'src/app/data/recipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchBarComponent]
})
export class HomePageComponent {

  constructor(private appComponent: AppComponent, private router: Router,private foodService:FoodService, private cocktailService:CocktailService) {
  }
  public searchFirstRowFoodFeed!:any;
  public searchSecondRowFoodFeed!:any;
  public searchThirdRowFoodFeed!:any;
  public searchFourthRowFoodFeed!:any;
  public searchCocktailFeed!:any;
  ngOnInit(): void {

    this.cocktailService.searchPopularCocktails().subscribe((result) =>{
  
      this.searchCocktailFeed = result
      console.log('Données récupérées :', result);
    });
    this.foodService.searchRecipes("").subscribe((data)=>{
      this.searchFirstRowFoodFeed = data.results.slice(0, 2).map((recipe:any)=> new Recipe("food", recipe))
      this.searchSecondRowFoodFeed = data.results.slice(2, 4).map((recipe:any)=> new Recipe("food", recipe))
      this.searchThirdRowFoodFeed = data.results.slice(4, 6).map((recipe:any)=> new Recipe("food", recipe))
      this.searchFourthRowFoodFeed = data.results.slice(6, 8).map((recipe:any)=> new Recipe("food", recipe))

    })
  }

  get appTitle() {
    return this.appComponent.title;
  };
  getArray(n: number): any[] {
    return Array(n);
  }

  navigateToSearchPage: any = (query: string) => {
    this.router.navigate(['food', query]);
  }
  onCocktailClick(id: string) {

    this.router.navigate(['/recipe/food', id]);
  }
}
