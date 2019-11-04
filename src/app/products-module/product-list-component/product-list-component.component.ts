import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../../services/products-service.service';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: ProductModel[];
  constructor(
    public productsServiceService: ProductsServiceService,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productsServiceService.getProducts();
  }

  onBuy(request) {
    this.cartService.handleBuyRequest(request.product, request.amount);
  }

  switchAdminStatus() {
    if (localStorage.getItem('isAdmin')) {
      localStorage.removeItem('isAdmin');
    } else {
      localStorage.setItem('isAdmin', 'true');
    }
  }
}
