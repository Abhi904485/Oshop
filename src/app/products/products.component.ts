import {Component, OnInit} from "@angular/core";
import {ProductService} from "../product.service";
import {Product} from "../models/app-product";
import {Observable} from "rxjs";
import {CategoryService} from "../category.service";
import {ActivatedRoute} from "@angular/router";
import {ShoppingCartService} from "../shopping-cart.service";
import {ShoppingCart} from "../models/shopping-cart";
import {switchMap} from "rxjs/operators";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  allProduct: Product[] = [];
  allFilteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private shoppingCartService: ShoppingCartService
  ) {

  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private applyFilter() {
    this.allFilteredProducts = (this.category) ? this.allProduct.filter(p => p.category === this.category) : this.allProduct;
  }

  private populateProducts() {
    this.productService.getAll().pipe(switchMap(products => {
      this.allProduct = products;
      return this.route.queryParamMap;
    })).subscribe(params => {
      this.category = params.get("category");
      this.applyFilter();
    });
  }
}

