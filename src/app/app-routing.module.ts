import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./page-components/home-page/home-page.component";
import { DiscoverPageComponent } from "./page-components/discover-page/discover-page.component";
import { RecipeDetailsPageComponent } from "./page-components/recipe-details-page/recipe-details-page.component";
import { NotFoundPageComponent } from "./page-components/not-found-page/not-found-page.component";
import {FoodPageComponent} from "./page-components/food-page/food-page.component";
import { CocktailPageComponent } from "./page-components/cocktail-page/cocktail-page.component";
import { CocktailDetailsPageComponent } from './page-components/cocktail-details-page/cocktail-details-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'discover', component: DiscoverPageComponent },
  { path: 'food/:param', component: FoodPageComponent },
  { path: 'food', component: FoodPageComponent },
  { path: 'cocktail/:param', component: CocktailPageComponent },
  { path: 'cocktail', component: CocktailPageComponent},
  { path: 'recipe/food/:id', component: RecipeDetailsPageComponent},
  { path: 'recipe/cocktail/:id', component: CocktailDetailsPageComponent},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
