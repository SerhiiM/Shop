import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {fetchProductList} from '../../@NgRx/products.actions';
import {buyRequest} from '../../@NgRx/cart.actions';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  cart$: Observable<ProductModel[]>;
  constructor(
    private store: Store<any>
  ) {
    this.products$ = this.store.pipe(select('products'));
    this.cart$ = this.store.pipe(select('cart'));
  }

  ngOnInit() {
    this.store.dispatch(fetchProductList());
  }

  onBuy(request) {
    this.store.dispatch(buyRequest({product: request.product, amount: request.amount}));
  }

  switchAdminStatus() {
    if (localStorage.getItem('isAdmin')) {
      localStorage.removeItem('isAdmin');
    } else {
      localStorage.setItem('isAdmin', 'true');
    }
  }
}
