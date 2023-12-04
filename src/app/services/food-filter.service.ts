import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodFilterService {

  private _selectedFilters = new BehaviorSubject<Array<any>>([]);
  selectedFilters: Observable<Array<any>>;

  constructor() {
    this.selectedFilters = this._selectedFilters.asObservable();
  }

  addFilter(filter_name: string, filter_value: string) {
    this.removeFilter(filter_name);
    this._selectedFilters.value.push({category: filter_name, value: filter_value});
  }

  removeFilter(filter_name: string) {
    this._selectedFilters.next(this._selectedFilters.value.filter((f: any) => f.category != filter_name));
  }
}
