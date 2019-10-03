import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsModuleModule} from './products-module/products-module.module';
import {CartModuleModule} from './cart-module/cart-module.module';
import {SharedModuleModule} from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModuleModule,
    CartModuleModule,
    SharedModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
