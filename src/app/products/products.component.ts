import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../models/app-product";
import { Observable, Subscription } from "rxjs";
import { CategoryService } from "../category.service";
import { ActivatedRoute } from "@angular/router";
import { ShoppingCartService } from "../shopping-cart.service";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit, OnDestroy {
  allCategories$: Observable<any[]>;
  allProduct: Product[] = [];
  allFilteredProducts: Product[] = [];
  category: string;
  subscribtion: Subscription;
  cart: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private shoppingCartService: ShoppingCartService
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

  async ngOnInit() {
    this.subscribtion = (await this.shoppingCartService.getCart()).subscribe(
      items => {
        this.cart = items;
        // console.log(items.itemsMap);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}

// ;
