
import {Action, createReducer, on} from '@ngrx/store';
import {ProductModel} from '../models/product.model';
import {cartUpdate} from './cart.actions';

export function cartReducer(state: ProductModel[], action: Action) {
  return createReducer(
    [],
    on(cartUpdate, (prevState, payload) => payload.products)
  )(state, action);
}
