import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {SharedSearchService} from "../../services/shared-search.service";

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

  constructor(private sharedSearchService: SharedSearchService) {
    this.searchValue = sharedSearchService.searchValue;
  }

  search() {
    this.comportement(this.searchValue);
  }

  setSearchValue(newSearch: string) {
    this.sharedSearchService.searchValue = newSearch;
  }
}
