import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetails } from 'src/app/data/detailFood';
import { CocktailService } from 'src/app/services/cocktail.service';
import { ImageSearchService } from 'src/app/services/image-search.service';

@Component({
  selector: 'app-cocktail-details-page',
  templateUrl: './cocktail-details-page.component.html',
  styleUrls: ['./cocktail-details-page.component.css']
})
export class CocktailDetailsPageComponent {
  protected readonly Array = Array;
  protected readonly Math = Math;
  private idRecipe: string = "";

  @Input()
  public recipe: RecipeDetails = new RecipeDetails("", "");
  constructor(private route: ActivatedRoute, private cocktailService : CocktailService, private imageSearchService: ImageSearchService) {
    this.idRecipe = <string>this.route.snapshot.paramMap.get('id');

    if (this.idRecipe != "") {
        this.searchDetails(parseInt(this.idRecipe));
    } else {
        alert("No recipe send");
    }
  }

  searchDetails(id: number) {
    this.cocktailService.searchDetails(id).subscribe(
      (data) => {
        // Assuming `data` is the response from the service
        // Here, you can update the component property, e.g., this.recipe
        this.recipe = new RecipeDetails(data.drinks[0], "cocktail");
        
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
}
