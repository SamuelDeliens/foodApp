import { Injectable } from '@angular/core';
import {Recipe} from "../data/recipe";

@Injectable({
  providedIn: 'root'
})
export class SharedSearchService {

  public searchValue: string = "";
  public recipes: Recipe[] = [];
  currentRecipe: any;

  constructor() { }

  setSearchValue(search: string) {
    this.searchValue = search;
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }
}
