import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { FilterService } from '../../../services/filter.service';
import { Recipe } from 'src/app/data/recipe';
import { Subscription, elementAt } from 'rxjs';


@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent {

  @Input()
  cocktail: Recipe[] = [];
  subscription: Subscription = new Subscription();
  selectedFilters: Array<any> = [];


  constructor(
    private route: ActivatedRoute, 
    public cocktailService: CocktailService, 
    private filterService: FilterService) {
    const queryParam = <string>this.route.snapshot.paramMap.get('param');
    if (queryParam) {
      this.searchName(queryParam);
    } else {
      this.searchName("Gin");
    }
  }

  ngOnInit(): void {
    this.subscription = this.filterService.selectedFilters.subscribe(selectedFilters => {
      this.selectedFilters = selectedFilters; 
    }); 
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search: any = (query: string) => {
    let alcoholic = "";
    let category = "";
    let glass = "";
    for (let tag of this.selectedFilters) {
      if (tag.category == "alcoholic") alcoholic = tag.value;
      if (tag.category == "category") category = tag.value;
      if (tag.category == "glass") glass = tag.value;
    }

    if (alcoholic == "" && glass == "" && category == "") {
      this.searchName(query);
    } else {
      this.searchFilters(alcoholic, category, glass, query);
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

  searchFilters: any = (alcoholic: any, category: any, glass: any, ingredient: any) => {
    this.cocktailService.filter(alcoholic, category, glass, ingredient)
      .subscribe(data => {
        this.cocktail = data.drinks.map((cocktail: any) => new Recipe("cocktail", cocktail));
        console.log(typeof data);
        console.log(data);
      });
  }
  
  
}
