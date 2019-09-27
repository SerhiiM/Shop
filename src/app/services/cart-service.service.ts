import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable()
export class CartServiceService {
  basket$ = new BehaviorSubject <ProductModel[]> ([]);
  constructor() {
  }

  handleBuyRequest(product: ProductModel) {
    const currentValue = this.basket$.value;
    const updatedValue = [...currentValue, product];
    this.basket$.next(updatedValue);
  }
}
