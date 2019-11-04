import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductsServiceService} from './products-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductModel> {

  constructor(public productsService: ProductsServiceService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.productsService.getProducts();
  }
}
