import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    appName: string = this.appComponent.title;
    constructor(private appComponent: AppComponent) {
    }
}
