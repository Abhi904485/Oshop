import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ProductService } from "src/app/product.service";
import { Subscription } from "rxjs";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { Product } from "src/app/models/app-product";
@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.scss"]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  @ViewChild("datatable") table: ElementRef;
  dataTable: any;
  allProducts: Product[];
  subscribtion: Subscription;
  filteredProducts: any[];
  constructor(private productService: ProductService) {
    this.subscribtion = this.productService
      .getAll()
      .subscribe(
        products => (this.filteredProducts = this.allProducts = products)
      );
  }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.allProducts.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.allProducts;
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
