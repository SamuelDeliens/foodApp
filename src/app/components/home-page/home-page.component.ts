import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private appComponent: AppComponent) {
  }

  get appTitle() {
    return this.appComponent.title;
  };
}
