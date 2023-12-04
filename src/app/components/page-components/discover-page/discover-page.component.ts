import { Component } from '@angular/core';
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
  foodRecipes: Recipe[] = [];
  cocktailRecipes: Recipe[] = [];

  constructor(private appComponent: AppComponent, private router: Router,private cocktailService: CocktailService, private foodService:FoodService){}
  public searchPopularDrinks!:any;
  public searchPopularFood!:any;
  ngOnInit(): void {
    this.cocktailService.searchPopularCocktails().subscribe((result) => {
      this.searchPopularDrinks=result
      console.log('Données récupérées :', result);
     

    });
    this.foodService.searchRecipes("potatoes").subscribe((result) => {
      this.searchPopularFood=result
      console.log('Données récupérées :', result);
      

    });
  }
}
