import { OrderByPipe } from './order-by.pipe';
import {Category} from '../models/enums.model';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
  it('should sort array', () => {
    const item = {
      id: 1,
      name: 'food',
      description: 'food',
      price: 100,
      category: Category.food,
      isAvailable: true
    };
    const item2 = {
      id: 1,
      name: 'food2',
      description: 'food2',
      price: 200,
      category: Category.food,
      isAvailable: true
    };
    const pipe = new OrderByPipe();
    expect(pipe.transform([item, item2], {key: 'price', order: false})[0].name).toBe('food2');
  });
});
