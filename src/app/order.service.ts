import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import {ShoppingCartService} from "./shopping-cart.service";

@Injectable({
  providedIn: "root"
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) {
  }

  async placeOrder(order) {
    const result = await this.db.list("/order").push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrder() {
    return this.db.list("/order");
  }
}
