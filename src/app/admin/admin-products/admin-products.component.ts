import {ProductService} from "src/app/product.service";
import {Subscription} from "rxjs";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Product} from "src/app/models/app-product";
import {Component, OnDestroy, ViewChild} from "@angular/core";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.scss"]
})
export class AdminProductsComponent implements OnDestroy {
  allProducts: Product[];
  subscribtion: Subscription;
  filteredProducts: any[];
  displayedColumns: string[] = ["title", "price", "edit"];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private productService: ProductService) {
    this.subscribtion = this.productService
      .getAll()
      .subscribe(
        products => {
          this.filteredProducts = this.allProducts = products;
          this.dataSource = new MatTableDataSource(products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = (filterValue.trim().length > 0) ? filterValue.trim().toLowerCase() : this.dataSource.filter;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
