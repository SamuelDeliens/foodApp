import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CocktailService } from 'src/app/services/cocktail.service';
import { FoodService } from 'src/app/services/food.service';
import {Recipe} from "../../../data/recipe";

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})

export class DiscoverPageComponent {
  
  @Input()
    foodRecipes: Recipe[] = [];
    cocktailRecipesVegetarian: Recipe[] = [];
    cocktailRecipesClassic: Recipe[] = [];
    cocktailRecipesExpensive: Recipe[] = [];
    cocktailRecipesUnforget: Recipe[] = [];
    cocktailRecipesCitrus: Recipe[] = [];

  constructor(private appComponent: AppComponent, private router: Router,private cocktailService: CocktailService, private foodService:FoodService){}
  public searchPopularDrinks!:any;
  public searchPopularFood!:any;
  public drinkRows!:any[];
  displayedDrinks: any[] = [];
  ngOnInit(): void {
    this.cocktailService.searchPopularCocktails().subscribe((result) => {
      this.searchPopularDrinks=result
      console.log('cocktails récupérés :', result);
      if (this.searchPopularDrinks && this.searchPopularDrinks.drinks) {
        this.cocktailRecipesClassic = this.searchPopularDrinks.drinks.filter((data: any)=> data.strTags?.includes('Classic'))
        this.cocktailRecipesVegetarian= this.searchPopularDrinks.drinks.filter((data: any)=> data.strTags?.includes('Vegetarian'))
        this.cocktailRecipesExpensive= this.searchPopularDrinks.drinks.filter((data: any)=> data.strTags?.includes('Expensive'))
        this.cocktailRecipesUnforget = this.searchPopularDrinks.drinks.filter((data: any)=> data.strIBA?.includes('Unforgettables'))
        this.cocktailRecipesCitrus = this.searchPopularDrinks.drinks.filter((data: any)=> data.strTags?.includes('Citrus'))
            } else {
        console.log("données vides rencontrées")
      }

    });
    

    this.foodService.searchRecipes("")
    .subscribe(data => {
          console.log(data);
          if (data.results.length == 0) {
            alert("No recipes found for ");
          } else {
            this.foodRecipes = data.results.map((recipe: any) => new Recipe("food", recipe));
          }
        },
        (error: any) => {
          console.error("An error occurred:", error);
          alert(error.error.message);
        });
        console.log(this.foodRecipes)
  }
 

}
