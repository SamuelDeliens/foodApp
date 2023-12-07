import {Component, Input} from '@angular/core';
import {Recipe} from "../../data/recipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  recipe: Recipe = new Recipe("", {});

  constructor(private router: Router) {
  }

  navigateToRecipeDetails() {
    console.log('navigateToRecipeDetails');
    if (this.recipe.type == "cocktail") {
      this.router.navigate(['/recipe/cocktail', this.recipe.id]);
    } else if (this.recipe.type == "food") {
      this.router.navigate(['/recipe/food', this.recipe.id]);
    }
  }

}
