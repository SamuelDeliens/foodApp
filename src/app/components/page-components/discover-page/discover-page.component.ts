import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CocktailService } from 'src/app/services/cocktail.service';
import { FoodService } from 'src/app/services/food.service';
import {Recipe} from "../../../data/recipe";
import { Category, Tag } from 'src/app/data/tag';


@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})

export class DiscoverPageComponent {
  
  @Input()
    foodRecipes: Recipe[] = [];
    

  constructor(private appComponent: AppComponent, private router: Router,private cocktailService: CocktailService,
  private foodService:FoodService){}
  public searchCategorizedCocktails!:any[]; 
  public cocktailCategoryList : string[] = [];
  public cocktailTagLists: Tag[] = [];
  public cocktailRecipesCategoriesOrdinary: any;
  public cocktailRecipesCategoriesHomemade : any;
  public cocktailRecipesCategoriesSoft : any;
  public cocktailRecipesCategoriesCoffee : any;
  public cocktailRecipesCategoriesAlcoholic : any;
  public cocktailRecipesCategoriesNoAlcoholic : any;
  public cocktailRecipesCategoriesCocktail: any;
  public cocktailRecipesCategoriesMartini : any;
  public cocktailRecipesCategoriesWhisky : any;
  public cocktailRecipesCategoriesHighball : any;
  public cocktailRecipesCategoriesCockGlass: any;
  public cocktailRecipesCategoriesHurricane: any;

  public searchCategorizedFoods!:any[]; 
  public foodCategoryList : string[] = [];
  public foodTagLists: Tag[] = [];
  public foodRecipesCategoriesDiet: any;
  public foodRecipesCategoriesHour : any;
  public foodRecipesCategoriesDif : any;
  public foodRecipesCategoriesAp: any;
  public foodRecipesCategoriesCuisines: any;
  public foodRecipesCategoriesHandMixer: any;
  public foodRecipesCategoriesBurger: any;
  public foodRecipesCategoriesAfrican: any;
  public foodRecipesCategoriesFrench: any;
  public foodRecipesCategoriesItalian: any;

  ngOnInit() : void {

    this.cocktailService.getTags().subscribe((datas: { [x: string]: {
      count: string; results: any; 
      } })=> {
        for (let category_name in datas) {
          let category: Category = new Category(category_name, datas[category_name].count, new Array<Tag>());
          for (let tag of datas[category_name].results) {
              category.tags.push(new Tag(tag.name, tag.display_name));
              this.cocktailTagLists.push(new Tag(tag.name, tag.display_name))
          }
        
          this.cocktailCategoryList.push(category_name);
        }
        this.setCategorizedCocktailList()
        })

        
 
        // this.foodService.getTags().subscribe((datas: { [x: string]: {
        //   count: string; results: any; 
        //   } })=> {
        //     for (let category_name in datas) {
        //       let category: Category = new Category(category_name, datas[category_name].count, new Array<Tag>());
        //       for (let tag of datas[category_name].results) {
        //           category.tags.push(new Tag(tag.name, tag.display_name));
        //           this.foodTagLists.push(new Tag(tag.name, tag.display_name));
                 
        //       }
              
        //       this.foodCategoryList.push(category_name);
        //     }
        //     this.foodCategoryList.push('easy');
        //     this.foodCategoryList.push('under_1_hour');
        //     this.foodCategoryList.push('hand_mixer');
        //     this.foodCategoryList.push('burgers');
        //     this.foodCategoryList.push('african');
        //     this.foodCategoryList.push('italian');
        //     this.foodCategoryList.push('french');
        //    this.setCategorizedFoodList()
        //     })
  }

 setCategorizedCocktailList(){
  this.cocktailCategoryList.map((data)=> {
           
    if(data ==='category')
   this.cocktailTagLists.map((tag)=>{
    console.log(tag)
    this.cocktailService.searchCategorizedCocktails(tag.name).subscribe((results)=>{
      if(results !== undefined && results.drinks !== "None Found")
      {
        this.searchCategorizedCocktails = results.drinks
        if(tag.name==='Ordinary_Drink'){ 
          this.cocktailRecipesCategoriesOrdinary = results.drinks
        }
        else if(tag.name === 'Homemade Liqueur'){
          this.cocktailRecipesCategoriesHomemade = results.drinks

        }
        else if (tag.name === "Soft Drink"){
          this.cocktailRecipesCategoriesSoft = results.drinks
        }
        else if (tag.name === "Coffee \/ Tea"){
          this.cocktailRecipesCategoriesCoffee = results.drinks
        }
        else if (tag.name === "Cocktail"){
          this.cocktailRecipesCategoriesCocktail = results.drinks
        }
      }
    })
  })
    
  else if(data ==='alcoholic')
  this.cocktailTagLists.map((tag)=>{
   console.log(tag)
   this.cocktailService.searchAlcoholicCocktails(tag.name).subscribe((results)=>{
     if(results !== undefined && results.drinks !== "None Found")
     {
       this.searchCategorizedCocktails = results.drinks
       if(tag.name==='Alcoholic'){ 
         this.cocktailRecipesCategoriesAlcoholic = results.drinks
       }
       else if(tag.name === 'Non_Alcoholic'){
         this.cocktailRecipesCategoriesNoAlcoholic = results.drinks

       }
       else if (tag.name === "Soft Drink"){
         this.cocktailRecipesCategoriesSoft = results.drinks
       }
       else if (tag.name === "Coffee \/ Tea"){
         this.cocktailRecipesCategoriesCoffee = results.drinks
       }
       else if (tag.name === "Cocktail"){
         this.cocktailRecipesCategoriesCocktail = results.drinks
       }
     }
   })
 })


 else if(data ==='glass')
 this.cocktailTagLists.map((tag)=>{
  console.log(tag)
  this.cocktailService.searchGlassCocktails(tag.name).subscribe((results)=>{
    if(results !== undefined && results.drinks !== "None Found")
    {
      this.searchCategorizedCocktails = results.drinks
      if(tag.name==='Hurricane glass'){ 
        console.log("Hurricane glass")
        this.cocktailRecipesCategoriesHurricane = results.drinks
      }
      else if(tag.name === 'Whiskey Glass'){
     
        this.cocktailRecipesCategoriesWhisky = results.drinks
      }
      else if (tag.name === "Cocktail_glass"){
        this.cocktailRecipesCategoriesCockGlass= results.drinks
        
      }
      else if (tag.name === "Martini Glass"){
        this.cocktailRecipesCategoriesMartini = results.drinks
       
        console.log(this.cocktailRecipesCategoriesMartini)
      }
      else if (tag.name === "Highball glass"){
        this.cocktailRecipesCategoriesHighball = results.drinks
      }
    }
  })
})
  })
  
 }
 setCategorizedFoodList(){
  this.foodCategoryList.map((data)=> {
   this.foodTagLists.map((tag)=>{
    console.log(tag)
    this.foodService.searchCategorizedFoods(data).subscribe((results)=>{
      if(results !== undefined && results.results !== "None Found")
      {
        this.searchCategorizedFoods = results.results
        if(data==='dietary'){ 
          this.foodRecipesCategoriesDiet = results.results
        }
        else if(data==='under_1_hour'){
          this.foodRecipesCategoriesHour = results.results

        }
        else if (data === "easy"){
          this.foodRecipesCategoriesDif = results.results
        }
        else if (data === "hand_mixer"){
          this.foodRecipesCategoriesHandMixer= results.results
        }
        else if (data === "burgers"){
          this.foodRecipesCategoriesBurger= results.results
        }
        else if (data === "african"){
          this.foodRecipesCategoriesAfrican= results.results
        }
        else if (data === "italian"){
          this.foodRecipesCategoriesItalian= results.results
        }
        else if (data === "french"){
          this.foodRecipesCategoriesFrench= results.results
        }
      }
    })
  })
    
  })
  
 }
     
  }

  

 
