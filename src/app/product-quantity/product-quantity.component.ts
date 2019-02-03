import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../models/app-product";
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
  selector: "app-product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.scss"]
})
export class ProductQuantityComponent  {
  @Input("product") product: Product;
  @Input("shopping-cart") shoppingCart: any;
  constructor(private shoppingCartService: ShoppingCartService) {}
  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }
}
