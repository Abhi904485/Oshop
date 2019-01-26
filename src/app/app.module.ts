import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment";
import { NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
import { UserService } from "./user.service";
import { AdminAuthGuardService } from "./admin-auth-guard.service";
import { ProductFormComponent } from "./admin/product-form/product-form.component";
import { CategoryService } from "./category.service";
import { CustomFormsModule } from "ng2-validation";
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
    ProductFormComponent
  ],
  imports: [
    FormsModule,
    CustomFormsModule,
    BrowserModule,
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
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
