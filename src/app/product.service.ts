import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  createProduct(product: any) {
    return this.db.list("/products").push(product);
  }

  getAll() {
    return this.db
      .list("/products")
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => {
            const { title, price, category, imageUrl }: any = c.payload.val();
            return {
              key: c.payload.key,
              title: title,
              price: price,
              category: category,
              imageUrl: imageUrl
            };
          })
        )
      );
  }
  get(productId: string) {
    return this.db.object("/products/" + productId).valueChanges();
  }
  update(productId: string, product: any) {
    return this.db.object("/products/" + productId).update(product);
  }

  delete(productId: string) {
    return this.db.object("/products/" + productId).remove();
  }
}

