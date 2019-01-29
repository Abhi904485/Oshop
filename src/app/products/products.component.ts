import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../models/app-product";
import { Observable } from "rxjs";
import { CategoryService } from "../category.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  allCategories$: Observable<any[]>;
  allProduct: Product[] = [];
  allFilteredProducts: Product[] = [];
  category: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getAll().subscribe(products => {
      this.allProduct = products;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get("category");
        this.allFilteredProducts = this.category
          ? this.allProduct.filter(
              product => product.category === this.category
            )
          : this.allProduct;
      });
    });
    this.allCategories$ = this.categoryService.getAll();
  }

  ngOnInit() {}
}
