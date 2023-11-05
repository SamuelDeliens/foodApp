import { Component } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchBarComponent]
})
export class HomePageComponent {

  constructor(private appComponent: AppComponent, private router: Router) {
  }

  get appTitle() {
    return this.appComponent.title;
  };

  navigateToSearchPage: any = (query: string) => {
    this.router.navigate(['search', query]);
  }

}
