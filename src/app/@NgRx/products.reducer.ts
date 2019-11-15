import {receiveProductList} from './products.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {ProductModel} from '../models/product.model';

export function productsReducer(state: ProductModel[], action: Action) {
  return createReducer(
    [],
    on(receiveProductList, (prevState, payload) => payload.products)
  )(state, action);
}
