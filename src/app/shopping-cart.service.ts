import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Product } from "./models/app-product";
import { take } from "rxjs/operators";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ShoppingCart } from "./models/shopping-cart";
@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private createId() {
    return this.db.list("/shopping-cart").push({
      dateCreated: new Date().getTime()
    });
  }
  private async getOrCreateCartId() {
    const cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    const result = await this.createId();
    localStorage.setItem("cartId", result.key);
    return result.key;
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db
      .object("/shopping-cart/" + cartId)
      .valueChanges()
      .pipe(
        map((x: any) => {
          if (x) return new ShoppingCart(x.items);
          return new ShoppingCart({});
        })
      );
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object("/shopping-cart/" + cartId + "/items/" + productId);
  }

  async addToCart(product: Product) {
    this.updateCart(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateCart(product, -1);
  }

  async updateCart(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.key);
    item$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        const quantity = item === null ? 1 : item.quantity + change;
        if (quantity === 0) {
          item$.remove();
        } else {
          item$.update({
            product: product,
            quantity: quantity
          });
        }
      });
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    await this.db.object("/shopping-cart/" + cartId + "/items").remove();
  }
}
