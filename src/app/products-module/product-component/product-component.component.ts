import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() handleBuy = new EventEmitter<{product: ProductModel, amount: number}>();

  constructor() {
  }

  ngOnInit() {
  }

  onBuy(amount: number = 1) {
    this.handleBuy.emit({product: this.product, amount});
  }
}
