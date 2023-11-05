import {Component, Input} from '@angular/core';
import {SharedSearchService} from "../../services/shared-search.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchValue: string = "";

  @Input()
  comportment: any = () => {
  };

  constructor(private sharedSearchService: SharedSearchService) {
    this.searchValue = sharedSearchService.searchValue;
  }

  search() {
    this.comportment(this.searchValue);
  }

  setSearchValue(newSearch: string) {
    this.sharedSearchService.searchValue = newSearch;
  }
}
