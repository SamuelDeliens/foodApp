import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {DiscoverPageComponent} from "./components/discover-page/discover-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'search/:param', component: SearchPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'discover', component: DiscoverPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
