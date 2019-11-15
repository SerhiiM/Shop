import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { clearRequest, deleteRequest} from '../../@NgRx/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  key: string;
  order: boolean;
  cart$: Observable<ProductModel[]>;

  constructor(private store: Store<any>) {
    this.key = 'price';
    this.order = true;
    this.cart$ = this.store.pipe(select('cart'));
  }

  ngOnInit() {
  }

  countTotalAmount(list: ProductModel[]) {
    return list.reduce((amount, item) => amount + (item.price * item.amount), 0);
  }

  delete(p: ProductModel) {
    this.store.dispatch(deleteRequest({product: p, amount: 1}));
  }

  clean() {
    this.store.dispatch(clearRequest());
  }

  handleSelectKey(value: string) {
    this.key = value;
  }

  handleSelectOrder(value: string) {
    this.order = (value === 'true');
  }

}
