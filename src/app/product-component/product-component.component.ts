import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() handleBuy = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onBuy() {
    this.handleBuy.emit(this.product);
  }
}
