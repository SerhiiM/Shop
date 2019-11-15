import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {productsReducer} from './products.reducer';
import {cartReducer} from './cart.reducer';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ products: productsReducer, cart: cartReducer }),
    StoreDevtoolsModule.instrument()
  ],
  exports: [
  ]
})
export class NgRxModule { }
