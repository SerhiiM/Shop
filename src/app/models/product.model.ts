import {Category} from './enums.model';

export interface ProductModel {
  name: string;
  description: string;
  price: number;
  category: Category ;
  isAvailable: boolean;
}
