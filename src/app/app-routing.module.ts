import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/page-components/home-page/home-page.component";
import { SearchPageComponent } from "./components/page-components/search-page/search-page.component";
import { DiscoverPageComponent } from "./components/page-components/discover-page/discover-page.component";
import { NotFoundPageComponent } from "./components/page-components/not-found-page/not-found-page.component";
import { RecipeDetailsPageComponent } from "./components/page-components/recipe-details-page/recipe-details-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'search/:param', component: SearchPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'recipe/:id', component: RecipeDetailsPageComponent},
  { path: 'discover', component: DiscoverPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
