import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./components/page-components/home-page/home-page.component";
import { DiscoverPageComponent } from "./components/page-components/discover-page/discover-page.component";
import { RecipeDetailsPageComponent } from "./components/page-components/recipe-details-page/recipe-details-page.component";
import { NotFoundPageComponent } from "./components/page-components/not-found-page/not-found-page.component";
import {FoodPageComponent} from "./components/page-components/food-page/food-page.component";
import { CocktailPageComponent } from "./components/page-components/cocktail-page/cocktail-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'discover', component: DiscoverPageComponent },
  { path: 'food/:param', component: FoodPageComponent },
  { path: 'food', component: FoodPageComponent },
  { path: 'cocktail/:param', component: CocktailPageComponent },
  { path: 'cocktail', component: CocktailPageComponent},
  { path: 'recipe/food/:id', component: RecipeDetailsPageComponent},
  { path: 'recipe/cocktail/:id', component: RecipeDetailsPageComponent},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
