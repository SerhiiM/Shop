import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../models/product.model';

export const buyRequest = createAction('[Product List] Add product to order', props<{product: ProductModel, amount: number}>());
export const cartUpdate = createAction('[Product List] Receive updated cart', props<{products: ProductModel[]}>());
