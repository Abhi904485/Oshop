import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryService } from "src/app/category.service";
import { ProductService } from "src/app/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit {
  allCategories$: Observable<any[]>;
  product: any = {};
  id: string;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.allCategories$ = this.categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.productService
        .get(this.id)
        .pipe(take(1))
        .subscribe(p => (this.product = p));
    }
  }

  ngOnInit() {}

  save(product: any) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.createProduct(product);
    }
    this.router.navigate(["/admin/products"]);
  }
  delete() {
    if (!confirm("Are you want to sure the delete this product ?")) {
      return;
    }
    this.productService.delete(this.id);
    this.router.navigate(["/admin/products"]);
  }
}
