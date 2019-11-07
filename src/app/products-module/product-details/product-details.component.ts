import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../../services/products-service.service';
import {ProductModel} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;
  constructor(public productsServiceService: ProductsServiceService, public activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(({productID}) => {
      // вместо filter можно использовать find и тогда не надо будет брать первый элемент
      this.product = this.productsServiceService.getProducts().filter(p => p.id === +productID)[0];
    });
  }

}
