import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../models/product.model';

export const fetchProductList = createAction('[Product List] Fetch Product List');
export const receiveProductList = createAction('[Product List] Receive Product List', props<{products: ProductModel[]}>());
