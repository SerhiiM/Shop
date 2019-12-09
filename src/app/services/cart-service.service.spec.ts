import { TestBed } from '@angular/core/testing';

import { CartService } from './cart-service.service';
import {Category} from '../models/enums.model';

describe('CartServiceService', () => {

  beforeEach(() => {
    localStorage.clear();
    return TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('handleBuyRequest should add product to basket$', () => {
    const service: CartService = TestBed.get(CartService);
    const item = {
      id: 1,
      name: 'food',
      description: 'food',
      price: 100,
      category: Category.food,
      isAvailable: true
    };
    service.handleBuyRequest(item, 2);
    expect(service.basket$.value.length).toBe(1);
    expect(service.basket$.value).toEqual([{...item, amount: 2}]);
  });
});
