import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DrinkService } from 'src/app/services/drink.service';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent {

  constructor(private appComponent: AppComponent, private router: Router,private drinkService: DrinkService, private foodService:FoodService){}
  public searchPopularDrinks!:any;
  public searchPopularFood!:any;
  ngOnInit(): void {
    this.drinkService.searchPopularDrinks().subscribe((result) => {
      this.searchPopularDrinks=result
      console.log('Données récupérées :', result);
      this.foodService.searchRecipes("potatoes").subscribe((result) => {
        this.searchPopularFood=result
        console.log('Données récupérées :', result);
        
  
      });

    });
  }
}
