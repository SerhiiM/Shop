import {Category} from './enums.model';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category ;
  isAvailable: boolean;
  amount?: number;
}
