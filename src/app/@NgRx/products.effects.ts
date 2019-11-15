import {Injectable} from '@angular/core';
import { map, mergeMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {receiveProductList} from './products.actions';
import {ProductsService} from "../services/products-service.service";

@Injectable()
export class ProductsEffects {
  fetchProductsEffects$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Fetch Product List'),
    mergeMap(() => this.productsService.getProducts().pipe(
      map(products => receiveProductList({products}))
      )
    )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }
}
