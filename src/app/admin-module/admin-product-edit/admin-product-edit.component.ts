import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {
  product: ProductModel;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productID = +this.route.snapshot.params.id;
    this.product = this.route.snapshot.data.products.find(p => p.id === productID);
  }

}
