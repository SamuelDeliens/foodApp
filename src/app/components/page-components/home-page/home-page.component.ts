import { Component } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import {Router} from "@angular/router";
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchBarComponent]
})
export class HomePageComponent {

  constructor(private appComponent: AppComponent, private router: Router,private feedService:FeedService) {
  }
  public searchFeed!:any;
  ngOnInit(): void {
    this.feedService.searchFeeds("meal_plan_carousel").subscribe((result) => {
      this.searchFeed=result
      console.log('Données récupérées :', result);
      

    });
  }

  get appTitle() {
    return this.appComponent.title;
  };

  navigateToSearchPage: any = (query: string) => {
    this.router.navigate(['food', query]);
  }

}
