import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../models/product.model';

export const buyRequest = createAction('[Product List] Add product to order', props<{product: ProductModel, amount: number}>());
export const deleteRequest = createAction('[Cart] Delete product from cart', props<{product: ProductModel, amount: number}>());
export const clearRequest = createAction('[Cart] Clear products on cart');
export const cartUpdate = createAction('[Product List] Receive updated cart', props<{products: ProductModel[]}>());
