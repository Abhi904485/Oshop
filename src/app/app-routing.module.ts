import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {LoginComponent} from "./login/login.component";
import {AdminOrdersComponent} from "./admin/admin-orders/admin-orders.component";
import {AdminProductsComponent} from "./admin/admin-products/admin-products.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {AuthGuardService} from "./auth-guard.service";
import {AdminAuthGuardService} from "./admin-auth-guard.service";
import {ProductFormComponent} from "./admin/product-form/product-form.component";

const routes: Routes = [
  { path: "", component: ProductsComponent},
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "login", component: LoginComponent },

  {
    path: "order-success/:id",
    component: OrderSuccessComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "admin/orders",
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "admin/products/:id",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "admin/products",
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "my/orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
