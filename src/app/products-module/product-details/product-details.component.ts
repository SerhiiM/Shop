import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products-service.service';
import {ProductModel} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;
  constructor(public productsServiceService: ProductsService, public activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(({productID}) => {
      this.productsServiceService.getProducts()
        .pipe(map(products => products.find(p => p.id === +productID)))
        .subscribe(product => this.product = product);
    });
  }

}
