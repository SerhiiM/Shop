import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  basket$ = new BehaviorSubject <ProductModel[]> ([]);

  constructor() {
    if (localStorage.getItem('basket$')) {
      this.basket$.next(JSON.parse(localStorage.getItem('basket$')));
    }
    this.basket$.subscribe(data => localStorage.setItem('basket$', JSON.stringify(data)));
  }

  handleBuyRequest(product: ProductModel, amount: number = 1): BehaviorSubject <ProductModel[]> {
    const currentList = this.basket$.value;
    const index = currentList.findIndex(p => p.name === product.name);
    if (index >= 0) {
      currentList[index].amount += amount;
    } else {
      currentList.push({...product, amount});
    }
    this.basket$.next([...currentList]);
    return this.basket$;
  }

  handleDeleteRequest(product: ProductModel, amount: number = 1) : BehaviorSubject <ProductModel[]> {
    const currentList = this.basket$.value;
    const index = currentList.findIndex(p => p.name === product.name);
    currentList[index].amount -= amount;
    if (currentList[index].amount === 0) {
      currentList.splice(index, 1);
    }
    this.basket$.next([...currentList]);
    return this.basket$;
  }

  handleCleanRequest() {
    this.basket$.next([]);
    return this.basket$;
  }
}
