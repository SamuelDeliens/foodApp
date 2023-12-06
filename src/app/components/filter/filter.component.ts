import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category, Tag} from "../../data/tag";
import {Subscription} from "rxjs";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {

    @Input()
    category: Category = new Category("+", "0", new Array<Tag>());
    selected: string = "";
    subscription: Subscription = new Subscription();
    selectedFilters: Array<any> = [];

    constructor(private filterService: FilterService) {
    }

    ngOnInit(): void {
        this.selected = this.category.name;

        this.subscription =
            this.filterService.selectedFilters.subscribe(selectedFilters => {
                this.selectedFilters = selectedFilters;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    choose() {
        document.getElementById(this.category.name)!.children[2].classList.toggle("open");
        document.getElementById(this.category.name)!.children[1].classList.toggle("triangle");
    }

    select(tag_name: string) {
        this.selected = tag_name;
        this.filterService.addFilter(this.category.name, tag_name);
    }

    unselect(tag_name: string) {
        this.selected = tag_name;
        this.filterService.removeFilter(this.category.name);
    }
}
