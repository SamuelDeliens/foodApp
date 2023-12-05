import { Component, HostListener } from '@angular/core';
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
  public drinkRows!:any[][]; 
  private startIndex = 0;
  private amountToLoad = 20;
  displayedDrinks: any[][] = [];
  ngOnInit(): void {
    this.cocktailService.searchPopularCocktails().subscribe((result) => {
      this.searchPopularDrinks=result
      console.log('cocktails récupérés :', result);
      if (this.searchPopularDrinks && this.searchPopularDrinks.drinks) {
        this.drinkRows = this.groupDrinks(this.searchPopularDrinks.drinks, this.startIndex, this.amountToLoad);
      } else {
        console.log("données vides rencontrées")
      }

    });
    
    this.foodService.searchRecipes("potatoes").subscribe((result) => {
      this.searchPopularFood=result
      console.log('Données récupérées :', result);
      

    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Vous êtes en bas de la page, chargez plus de données ici
      this.loadInitialData(this.drinkRows);
    }
  }
  loadInitialData(drinks : any[]): any[][] {
    // Chargez les premières `amountToLoad` boissons
    return this.groupDrinks(drinks,this.startIndex,this.amountToLoad);
  }

 
  groupDrinks(drinks: any[], startIndex:number, amountToLoad:number): any[][] {
    const rows = [];
    for (let i = startIndex; i < amountToLoad && drinks!==undefined; i += 4) {

      rows.push(drinks?.slice(i, i + 4));
    }
    console.log(rows)
    this.startIndex = this.amountToLoad;
    this.amountToLoad += 4;
    return rows;
  }
}
