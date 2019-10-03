import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  basket$ = new BehaviorSubject <{sum: number, list: ProductModel[]}> ({sum: 0, list: []});
  constructor() {
  }

  handleBuyRequest(product: ProductModel) {
    const currentValue = this.basket$.value;
    const index = currentValue.list.findIndex(p => p.name === product.name);
    if (index >= 0) {
      currentValue.list[index].amount++;
    } else {
      currentValue.list.push({...product, amount: 1});
    }
    currentValue.sum += product.price;
    this.basket$.next(currentValue);
  }
}
