import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FoodService} from "../../../services/food.service";
import {RecipeDetails} from "../../../data/detailFood";
import {ImageSearchService} from "../../../services/image-search.service";
import {Recipe} from "../../../data/recipe";

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent {

  private idRecipe: string = "";
  public fetchCocktailDetails!:any; 
  public videoURL!: string; 
  @Input()
  recipe: RecipeDetails = new RecipeDetails("");
  similarRecipes: Recipe[] = [];

  constructor(private route: ActivatedRoute, private foodService: FoodService, private imageSearchService: ImageSearchService) {
    this.idRecipe = <string>this.route.snapshot.paramMap.get('id');

    if (this.idRecipe != "") {
        this.searchDetails(parseInt(this.idRecipe));
        this.searchSimilar(parseInt(this.idRecipe));
    } else {
        alert("No recipe send");
    }
  }


    searchDetails: any = (id: number) => {
        this.foodService.searchDetails(id)
            .subscribe(data => {
                    this.recipe = new RecipeDetails(data);
                    console.log(this.recipe);

                    for (let ingredient of this.recipe.ingredients) {
                        this.imageSearchService.searchImages(ingredient.name)
                            .subscribe(data => {
                                console.log(data);
                                let image = data.photos.photo[0];
                                ingredient.image = "https://live.staticflickr.com/" + image.server +
                                    "/" + image.id + "_" + image.secret + ".jpg";
                                console.log(ingredient.name);
                                console.log(ingredient.description);
                                console.log(ingredient.image);
                            });
                    }
                  },
                  (error: any) => {
                    console.log(error);
                    alert("No recipes found for " + id);
                  });
    }

    searchSimilar: any = (id: number) => {
        this.foodService.searchSimilarRecipes(id)
            .subscribe(data => {
                    this.similarRecipes = data.results.map((recipe: any) => new Recipe("food", recipe));
                },
                (error: any) => {
                    console.log(error);
                    alert("No recipes found for " + id);
                });
    }

    protected readonly Array = Array;
    protected readonly Math = Math;

    decreasePortion() {
        this.recipe.portion--;
    }

    increasePortion() {
        this.recipe.portion++;
    }
}
