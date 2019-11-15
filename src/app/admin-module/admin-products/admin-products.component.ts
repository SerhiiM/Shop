import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductsService} from '../../services/products-service.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: BehaviorSubject<ProductModel[]>;
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

}
