import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { Recipe } from 'src/app/data/recipe';


@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent {
  cocktail: Recipe[] = [];

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
  filterByAlcoholic: any = (query: string) => {
    this.cocktailService.filterByAlcoholic(query)
      .subscribe(data => {
        this.cocktail = data.drinks.map((cocktail: any) => new Recipe("cocktail", cocktail));
        console.log(typeof data);
        console.log(data);
      });
  }

  searchWithFilter: any = (query: string, filter: string) => {
    if (filter === "Alcoholic") {
      this.filterByAlcoholic(query);
    }
  }
}
