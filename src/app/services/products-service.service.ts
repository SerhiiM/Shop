import { Injectable } from '@angular/core';
import {Category} from '../models/enums.model';
import {ProductModel} from '../models/product.model';
import {BehaviorSubject, Observable} from "rxjs";

const products = [
  {
    id: 0,
    name: 'Cola',
    description: 'Best beverage',
    price: 10,
    category: Category.drink,
    isAvailable: true,
  },
  {
    id: 1,
    name: 'Sandwich',
    description: 'Best food',
    price: 15,
    category: Category.food,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Hot-dog',
    description: 'Best Hot-dog',
    price: 25,
    category: Category.food,
    isAvailable: false,
  },
  {
    id: 3,
    name: 'Dress',
    description: 'Simple dress',
    price: 55,
    category: Category.clothes,
    isAvailable: true,
  }
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products$ = new BehaviorSubject <ProductModel[]>(products);
  constructor() { }
  getProducts(): BehaviorSubject<ProductModel[]> {
    return this.products$;
  }
}
