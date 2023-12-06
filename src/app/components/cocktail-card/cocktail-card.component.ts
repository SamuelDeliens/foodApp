import {Component, Input} from '@angular/core';
import {Recipe} from "../../data/recipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css']
})
export class CocktailCardComponent {

  @Input()
  recipe: any;

  constructor(private router: Router) {
  }

  navigateToRecipeDetails() {
    console.log('navigateToRecipeDetails');
    this.router.navigate(['/recipe/food', this.recipe.idDrink]);
  }
}
