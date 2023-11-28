import { Component } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import {Router} from "@angular/router";
import { FeedService } from 'src/app/services/feed.service';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchBarComponent]
})
export class HomePageComponent {

  constructor(private appComponent: AppComponent, private router: Router,private feedService:FeedService, private cocktailService:CocktailService) {
  }
  public searchFeed!:any;
  public searchCocktailFeed!:any;
  ngOnInit(): void {
    // this.feedService.searchFeeds("meal_plan_carousel").subscribe((result) => {
    //   this.searchFeed=result
    //   console.log('Données récupérées :', result);
      

    // });
    this.cocktailService.searchPopularCocktails().subscribe((result) =>{
      this.searchCocktailFeed = result
      console.log('Données récupérées :', result);
    });
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
    // Logique personnalisée
    this.router.navigate(['/recipe/food', id]);
  }
}
