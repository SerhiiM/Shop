import { Pipe, PipeTransform } from '@angular/core';
import {ProductModel} from '../models/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: ProductModel[], param?: any): ProductModel[] {
    return list.sort((a, b) => {
      if (a[param.key] > b[param.key]) {
        return param.order ? 1 : -1;
      } else if (a[param.key] < b[param.key]) {
        return param.order ? - 1 : 1;
      } else {
        return 0;
      }
    });
  }

}
