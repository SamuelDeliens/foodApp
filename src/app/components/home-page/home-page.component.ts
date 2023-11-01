import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  searchValue: string = "";

  constructor(private router: Router, private appComponent: AppComponent) {
  }

  get appTitle() {
    return this.appComponent.title;
  };

  navigateToSearchPage(){
    this.router.navigate(['search', this.searchValue]);
  }
}
