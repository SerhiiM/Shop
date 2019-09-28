import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductsServiceService } from './services/products-service.service';
import { CartComponent } from './cart/cart.component';
import { CartServiceService } from './services/cart-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponent
  ],
  imports: [BrowserModule],
  // Названия классов сервисов надо упростить ProductsServiceService -> ProductsService
  providers: [ProductsServiceService, CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Посмотрите пункты 9, 12.7
