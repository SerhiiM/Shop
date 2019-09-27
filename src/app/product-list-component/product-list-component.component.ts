import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../services/products-service.service';
import {ProductModel} from '../models/product.model';
import {CartServiceService} from '../services/cart-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: ProductModel[];
  constructor(
    public productsServiceService: ProductsServiceService,
    public cartServiceService: CartServiceService
  ) { }

  ngOnInit() {
    this.products = this.productsServiceService.getProducts();
  }

  onBuy(product: ProductModel) {
    this.cartServiceService.handleBuyRequest(product);
  }
}
