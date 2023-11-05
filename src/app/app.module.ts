import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './components/page-components/home-page/home-page.component';
import { SearchPageComponent } from './components/page-components/search-page/search-page.component';
import { DiscoverPageComponent } from './components/page-components/discover-page/discover-page.component';
import { RecipeDetailsPageComponent } from './components/page-components/recipe-details-page/recipe-details-page.component';
import { NotFoundPageComponent } from './components/page-components/not-found-page/not-found-page.component';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    DiscoverPageComponent,
    MainNavComponent,
    NotFoundPageComponent,
    SearchBarComponent,
    CardComponent,
    CarrouselComponent,
    RecipeDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
