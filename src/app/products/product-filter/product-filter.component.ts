import { Component, OnInit, Input } from "@angular/core";
import { CategoryService } from "src/app/category.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-filter",
  templateUrl: "./product-filter.component.html",
  styleUrls: ["./product-filter.component.scss"]
})
export class ProductFilterComponent implements OnInit {
  allCategories$: Observable<{}>;
  @Input("category") category: string;
  constructor(private categoryService: CategoryService) {
    this.allCategories$ = this.categoryService.getAll();
  }

  ngOnInit() {}
}
