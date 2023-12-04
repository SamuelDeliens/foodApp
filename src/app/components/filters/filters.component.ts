import {
    Component,
    Input, OnDestroy,
    OnInit,
} from '@angular/core';
import {FoodService} from "../../services/food.service";
import {Category, Tag} from "../../data/tag";
import {Subscription} from "rxjs";
import {FoodFilterService} from "../../services/food-filter.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {

    @Input()
    subscription: Subscription = new Subscription();
    selectedFilters: Array<any> = [];

    categories: Array<Category> = new Array<Category>();

    constructor(private foodService: FoodService, private foodFilterService: FoodFilterService) {
    }

    ngOnInit(): void {
        this.foodService.getTags().subscribe(data => {
            for (let category_name in data) {
                let category: Category = new Category(category_name, data[category_name].count, new Array<Tag>());
                for (let tag of data[category_name].results) {
                    category.tags.push(new Tag(tag.name, tag.display_name));
                }
                this.categories.push(category);
            }
        });

        this.subscription =
            this.foodFilterService.selectedFilters.subscribe(selectedFilters => {
                this.selectedFilters = selectedFilters;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    openFilters() {
        document.getElementById("filters")!.classList.toggle("close");
        document.getElementById("back")!.classList.toggle("close");
        document.getElementById("selected-filters")!.classList.toggle("close");
    }

    removeFilter(category: any) {
        console.log("remove filter");
        console.log(category);
        this.foodFilterService.removeFilter(category);
    }
}
