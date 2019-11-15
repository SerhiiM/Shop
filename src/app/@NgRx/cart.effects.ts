import {Injectable} from '@angular/core';
import {map, mergeMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartService} from '../services/cart-service.service';
import {cartUpdate} from './cart.actions';

@Injectable()
export class CartEffects {
  cartEffects$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Add product to order'),
    mergeMap(({product, amount}) => this.cartService.handleBuyRequest(product, amount)),
    mergeMap(() => this.cartService.basket$.pipe(
      map(products => cartUpdate({products}))
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
