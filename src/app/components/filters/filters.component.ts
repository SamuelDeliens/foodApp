import {
    Component,
    Input, OnDestroy,
    OnInit,
} from '@angular/core';
import {FoodService} from "../../services/food.service";
import {Category, Tag} from "../../data/tag";
import {Subscription} from "rxjs";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {

    @Input()
    service: any = FoodService;
    subscription: Subscription = new Subscription();
    selectedFilters: Array<any> = [];

    categories: Array<Category> = new Array<Category>();

    constructor(private filterService: FilterService) {
    }

    ngOnInit(): void {
        this.service.getTags().subscribe((data: { [x: string]: {
            count: string; results: any; 
}; }) => {
            for (let category_name in data) {
                let category: Category = new Category(category_name, data[category_name].count, new Array<Tag>());
                for (let tag of data[category_name].results) {
                    category.tags.push(new Tag(tag.name, tag.display_name));
                }
                this.categories.push(category);
            }
        });

        this.subscription =
            this.filterService.selectedFilters.subscribe(selectedFilters => {
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
        this.filterService.removeFilter(category);
    }
}
