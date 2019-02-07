import {BrowserModule} from "@angular/platform-browser";
import {environment} from "../environments/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {BsNavbarComponent} from "./bs-navbar/bs-navbar.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {AdminProductsComponent} from "./admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./admin/admin-orders/admin-orders.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {UserService} from "./user.service";
import {AdminAuthGuardService} from "./admin-auth-guard.service";
import {ProductFormComponent} from "./admin/product-form/product-form.component";
import {CategoryService} from "./category.service";
import {CustomFormsModule} from "ng2-validation";
import {HttpClientModule} from "@angular/common/http";
import {ProductFilterComponent} from "./products/product-filter/product-filter.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ShoppingCartService} from "./shopping-cart.service";
import {ProductQuantityComponent} from "./product-quantity/product-quantity.component";
import {OrderService} from "./order.service";
import {ShoppingCartSummaryComponent} from "./shopping-cart-summary/shopping-cart-summary.component";
import {ShippingFormComponent} from "./shipping-form/shipping-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule
  ]
})
export class AppModule {}
