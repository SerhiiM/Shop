import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart-service.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  countTotalAmount(list: ProductModel[]) {
    return list.reduce((amount, item) => amount + (item.price * item.amount), 0);
  }

  delete(p: ProductModel) {
    this.cartService.handleDeleteRequest(p);
  }

  clean() {
    this.cartService.handleCleanRequest();
  }
}
