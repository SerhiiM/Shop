import {Injectable} from '@angular/core';
import { map, mergeMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartService} from '../services/cart-service.service';
import {receiveProductList} from './products.actions';

@Injectable()
export class ProductsEffects {
  productsEffects$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Fetch Product List'),
    mergeMap(() => this.cartService.basket$.pipe(
      map(products => receiveProductList({products}))
      )
    )
    )
  );

  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {
  }
}
