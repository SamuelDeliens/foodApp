import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { Recipe } from 'src/app/data/recipe';
import { query } from '@angular/animations';
import { elementAt } from 'rxjs';


@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent {
  cocktail: Recipe[] = [];
  category: string = "";
  alcoholic: string = "";
  glass: string = "";

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) {
    const queryParam = <string>this.route.snapshot.paramMap.get('param');
    if (queryParam) {
      this.searchName(queryParam);
    }
  }

  searchName: any = (query: string) => {
    this.cocktailService.searchName(query)
      .subscribe(data => {
        this.cocktail = data.drinks.map((cocktail: any) => new Recipe("cocktail", cocktail));
        console.log(typeof data);
        console.log(data);
      });
  }

  search: any = (query: string) => {
    if (this.alcoholic == "" && this.glass == "" && this.category == "") {
      this.searchName(query);
    } else {
      this.searchFilters(this.alcoholic, this.category, this.glass, query);
    }
  }

  searchFilters: any = (alcoholic: string, category: string, glass: string, ingredient: string) => {
    this.cocktailService.filter(alcoholic, category, glass, ingredient)
      .subscribe(data => {
        this.cocktail = data.drinks.map((cocktail: any) => new Recipe("cocktail", cocktail));
        console.log(typeof data);
        console.log(data);
      });
  }
  
  
}
