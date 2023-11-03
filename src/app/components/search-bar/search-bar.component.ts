import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchValue: string = "";

  @Input()
  comportement: any = () => {

  };

  constructor() {
  }

  search() {
    this.comportement(this.searchValue);
  }
}
