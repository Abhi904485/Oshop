import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Appuser } from "../models/app-user";
import { ShoppingCartService } from "../shopping-cart.service";
import { Observable } from "rxjs";
import { ShoppingCart } from "../models/shopping-cart";

@Component({
  selector: "app-bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.scss"]
})
export class BsNavbarComponent implements OnInit {
  appUser: Appuser;
  cart$: Observable<ShoppingCart>;
  public shoppingCartItemCount: number;
  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => (this.appUser = appUser));
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }
}
