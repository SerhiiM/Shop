import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../../services/products-service.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: ProductModel[];
  constructor(public productsService: ProductsServiceService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
