import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedSearchService} from "../../../services/shared-search.service";
import {Recipe} from "../../../data/recipe";
import { CocktailService } from 'src/app/services/cocktail.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent {

  private idRecipe: string = "";
  public fetchCocktailDetails!:any;
  public safeURL!: SafeResourceUrl;
  public videoURL!: string; 
  @Input()
  recipe: Recipe = new Recipe("", {});

  constructor(private route: ActivatedRoute, private sharedSearchService: SharedSearchService,
    private cocktailService: CocktailService, private sanitizer: DomSanitizer) {
    this.idRecipe = <string>this.route.snapshot.paramMap.get('id');
    this.recipe = this.sharedSearchService.currentRecipe; 
  }

  ngOnInit() {
    this.cocktailService.fetchCocktailDetailsById(this.idRecipe ).subscribe((result) =>{
      this.fetchCocktailDetails = result
      console.log('Données récupérées :', result);
    }); 
 
  }
  getYoutubeId(url: string): string {
    const parts = url.split('v=');
    return parts.length > 1 ? parts[1] : '';
  }
  cocktailIngredientsById(data: any): string[] {
    console.log(data)
    let ingredients: string[] = [];
  
    for (let key in data) {
      if (data.hasOwnProperty(key) && key.startsWith('strIngredient') && data[key]) {
        ingredients.push(data[key]);
      }
    } 
    console.log(ingredients)
    return ingredients;
  }
}
