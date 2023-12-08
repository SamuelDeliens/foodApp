import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CocktailService } from 'src/app/services/cocktail.service';
import { FoodService } from 'src/app/services/food.service';
import {Recipe} from "../../../data/recipe";
import {forkJoin} from "rxjs";

type MapperKey = 'alcoholic' | 'category' | 'glass' | 'ingredient' | 'name';

interface Tag {
    type: string;
    category: MapperKey;
    name: string;
    display_name: string;
}

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})

export class DiscoverPageComponent {
  
    @Input()
    public tag: any[] = [];
    recipesTag: {display_name: string, results: Recipe[]}[] = [];

    constructor(
        private appComponent: AppComponent,
        private router: Router,
        private cocktailService: CocktailService,
        private foodService:FoodService
    ){
        this.tag = [
            {type:"cocktail", category: "category",name:"Ordinary_Drink", display_name: "Ordinary Drink"},
            {type: "cocktail", category: "ingredient", name: "Gin", display_name: "Gin"},
            {type: "cocktail", category: "alcoholic", name: "Alcoholic", display_name: "Alcoholic"},
            {type: "cocktail", category: "glass", name: "Cocktail_glass", display_name: "Cocktail glass"},
            {type: "cocktail", category: "ingredient", name: "Orange,Vodka", display_name: "Orange"},
            {type: "cocktail", category: "name", name: "Martini", display_name: "Martini"},

            {type: "food", category: "cuisines", name: "japanese", display_name: "Japanese"},
            {type: "food", category: "cuisines", name: "french", display_name: "French"},
            {type: "food", category: "dietary", name: "vegetarian", display_name: "Vegetarian"},
            {type: "food", category: "difficulty", name: "under_30_minutes", display_name: "Under 30 Minutes"},
            {type: "food", category: "difficulty", name: "easy", display_name: "Easy"},
            {type: "food", category: "meals", name: "burgers", display_name: "Burgers"},
            {type: "food", category: "cuisines", name: "italian", display_name: "Italian"},
            {type: "food", category: "meals", name: "pasta", display_name: "Pasta"},
        ];
    }

    ngOnInit() : void {
        this.selectTags();

        this.cocktailService.searchPopularCocktails().subscribe((results)=>{
            if(results !== undefined && results.drinks !== "None Found")
            {
                let resultsTag = results.drinks.map((drink: any) => {
                    return new Recipe("cocktail", drink);
                });
                resultsTag = resultsTag.splice(0, 6);
                this.recipesTag.push(
                    {display_name: "Popular Cocktails",
                        results: resultsTag
                    });
            }
        });

        this.cocktailService.searchLatestCocktails().subscribe((results)=>{
            if(results !== undefined && results.drinks !== "None Found")
            {
                let resultsTag = results.drinks.map((drink: any) => {
                    return new Recipe("cocktail", drink);
                });
                resultsTag = resultsTag.splice(0, 6);
                this.recipesTag.push(
                    {display_name: "Latest Cocktails",
                        results: resultsTag
                    });
            }
        });

        for (let tag of this.tag) {
            if (tag.type == "cocktail") {
                console.log("cocktail", tag);
                this.searchCocktail(tag);
            } else if (tag.type == "food") {
                console.log("food", tag);
                this.searchFood(tag);
            }
        }
    }

    selectTags() {
        let randomTags = [];
        for (let i = 0; i < 3; i++) {
            let tagLength = this.tag.length;
            let randomIndex = Math.floor(Math.random() * tagLength);
            randomTags.push(this.tag[randomIndex]);
            this.tag.splice(randomIndex, 1);
        }
        this.tag = randomTags;
    }

    searchCocktail(tag: Tag) {
        let mapper: { [key in MapperKey]: string } = { alcoholic: "", category: "", glass: "", ingredient: "", name: "" };
        mapper[tag.category] = tag.name;
        if (mapper.name) {
            this.cocktailService.searchName(mapper.name).subscribe((results) => {
                if (results !== undefined && results.drinks !== "None Found") {
                    let resultsTag = results.drinks.map((drink: any) => {
                        return new Recipe("cocktail", drink);
                    });
                    resultsTag = resultsTag.splice(0, 6);
                    this.recipesTag.push({ display_name: tag.display_name, results: resultsTag});
                }
            });
        }
        else {
            this.cocktailService.filter(mapper.alcoholic, mapper.category, mapper.glass, mapper.ingredient)
                .subscribe((results) => {
                    if (results !== undefined && results.drinks !== "None Found") {
                        let resultsTag = results.drinks.map((drink: any) => {
                            return new Recipe("cocktail", drink);
                        });
                        resultsTag = resultsTag.splice(0, 6);
                        this.recipesTag.push({ display_name: tag.display_name, results: resultsTag});
                }
            });
        }
    }

    searchFood(tag: any) {
        this.foodService.searchRecipes("", tag.name, "0", "6").subscribe((results) => {
            if (results !== undefined && results.results !== "None Found") {
                let resultsTag = results.results.map((food: any) => {
                    return new Recipe("food", food);
                });
                resultsTag = resultsTag.splice(0, 6);
                this.recipesTag.push({ display_name: tag.display_name, results: resultsTag});
            }
        });
    }
}

  

 
