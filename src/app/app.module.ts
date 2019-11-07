import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ProductsModuleModule} from './products-module/products-module.module';
import {CartModuleModule} from './cart-module/cart-module.module';
import {SharedModuleModule} from './shared-module/shared-module.module';
import { AboutComponent } from './components/about-component/about-component.component';
import {ProductListComponentComponent} from './products-module/product-list-component/product-list-component.component';
import {CartComponent} from './cart-module/cart/cart.component';
import {ProductDetailsComponent} from './products-module/product-details/product-details.component';
import {OrderComponent} from './orders-module/order/order.component';
import {OrdersModuleModule} from './orders-module/orders-module.module';
import {AdminModule} from './admin-module/admin.module';
import {AdminProductsComponent} from './admin-module/admin-products/admin-products.component';
import {AdminProductEditComponent} from './admin-module/admin-product-edit/admin-product-edit.component';
import {IsAdminGuard} from './shared-module/is-admin.guard';
import {ProductResolver} from './services/product-resolver.service';

// Не хотели вынести в отдельный модуль?
const appRoutes: Routes = [
  { path: 'products-list', component: ProductListComponentComponent },
  { path: 'product/:productID', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'admin', canActivate: [IsAdminGuard], children: [
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'product/edit/:id',
        component: AdminProductEditComponent,
        resolve: {
          products: ProductResolver
        },
      }
    ] },
  { path: '**', redirectTo: 'products-list' }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModuleModule,
    CartModuleModule,
    SharedModuleModule,
    OrdersModuleModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AdminModule
  ],
  providers: [ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
