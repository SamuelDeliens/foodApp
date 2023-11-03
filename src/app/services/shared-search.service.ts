import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSearchService {

  public searchValue: string = "";

  constructor() { }

  setSearchValue(search: string) {
    this.searchValue = search;
  }
}
