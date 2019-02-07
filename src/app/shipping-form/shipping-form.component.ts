import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ShoppingCart} from "../models/shopping-cart";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {OrderService} from "../order.service";
import {AuthService} from "../auth.service";
import {Order} from "../models/order";

@Component({
  selector: "app-shipping-form",
  templateUrl: "./shipping-form.component.html",
  styleUrls: ["./shipping-form.component.scss"]
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input("cart") cart: ShoppingCart;
  shipping = {};
  user_id: string;
  userSubscription: Subscription;

  constructor(private route: Router,
              private orderService: OrderService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => this.user_id = user.uid);
  }

  async placeOrder() {
    const order = new Order(this.shipping, this.cart, this.user_id);
    const result = await this.orderService.placeOrder(order);
    this.route.navigate(["order-success/", result.key]);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  save(value: any) {
  }
}
