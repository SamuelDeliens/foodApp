import {Component, Input} from '@angular/core';
import {SharedSearchService} from "../../services/shared-search.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input()
  searchValue: string = "";

  @Input()
  comportment: any = () => {
  };

  constructor() {
  }

  search() {
    this.comportment(this.searchValue);
  }
}
