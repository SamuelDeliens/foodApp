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
    this.router.navigate(['/recipe', this.recipe.id]);
  }
}
