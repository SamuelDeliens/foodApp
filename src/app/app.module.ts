import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page-components/home-page/home-page.component';
import { DiscoverPageComponent } from './page-components/discover-page/discover-page.component';
import { FoodPageComponent } from './page-components/food-page/food-page.component';
import { RecipeDetailsPageComponent } from './page-components/recipe-details-page/recipe-details-page.component';
import { CocktailPageComponent } from './page-components/cocktail-page/cocktail-page.component';
import { NotFoundPageComponent } from './page-components/not-found-page/not-found-page.component';

import { MainNavComponent } from './components/main-nav/main-nav.component'; 
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterComponent } from './components/filter/filter.component';
import { CocktailDetailsPageComponent } from './page-components/cocktail-details-page/cocktail-details-page.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterDownComponent } from './components/footer-down/footer-down.component';
import {LazyLoadImageModule} from "ng-lazyload-image";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DiscoverPageComponent,
    MainNavComponent,
    NotFoundPageComponent,
    SearchBarComponent,
    CardComponent,
    CarrouselComponent,
    RecipeDetailsPageComponent,
    FoodPageComponent,
    CocktailPageComponent, 
    FooterDownComponent,  
    FiltersComponent,
    FilterComponent,
    CocktailDetailsPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        YouTubePlayerModule,
        HttpClientJsonpModule,

        //Material

        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        LazyLoadImageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
