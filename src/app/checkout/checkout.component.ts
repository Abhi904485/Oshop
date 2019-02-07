import {Component, OnInit} from "@angular/core";
import {ShoppingCartService} from "../shopping-cart.service";
import {Observable} from "rxjs";
import {ShoppingCart} from "../models/shopping-cart";
import {Router} from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  cart: ShoppingCart;


  constructor(private route: Router,
              private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
