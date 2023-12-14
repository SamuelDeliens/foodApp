import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { FilterService } from '../../services/filter.service';
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
  searchValue: string = "";

  max_page = 1;
  page = 1;


  constructor(
    private route: ActivatedRoute, 
    public cocktailService: CocktailService, 
    private filterService: FilterService) {
      const queryParam = <string>this.route.snapshot.paramMap.get('param');
      this.searchValue = queryParam;
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
      document.getElementById("loading")!.classList.add("show_loading");
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
        this.max_page = Math.ceil((data.drinks.length - 1) / 20);
        console.log(data);
          document.getElementById("loading")!.classList.remove("show_loading");
      });
  }

  searchFilters: any = (alcoholic: any, category: any, glass: any, ingredient: any) => {
    this.cocktailService.filter(alcoholic, category, glass, ingredient)
      .subscribe(data => {
          this.cocktail = data.drinks.map((cocktail: any) => new Recipe("cocktail", cocktail));
          this.max_page = Math.ceil((data.drinks.length - 1) / 20);
        console.log(data);
          document.getElementById("loading")!.classList.remove("show_loading");
      });
  }

    previousPage() {
        if (this.page > 1) {
            this.page--;
        }
    }

    nextPage() {
        if (this.page < this.max_page) {
            this.page++;
        }
    }

    setValue($event: any) {
        this.page = $event.target.value;
    }
}
