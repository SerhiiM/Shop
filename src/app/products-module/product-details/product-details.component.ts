import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {ProductModel} from '../../models/product.model';
import {selectRouteParams} from '../../@NgRx/router.selectors';
import {fetchProductList} from "../../@NgRx/products.actions";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;
  constructor(
    private store: Store<any>
  ) {
    this.store.pipe(select(selectRouteParams))
      .subscribe(({productID}) => {
        this.store.pipe(select('products'))
          .pipe(map(products => products.find(p => p.id === +productID)))
          .subscribe(product => this.product = product);
      });
  }

  ngOnInit() {
    this.store.dispatch(fetchProductList());
  }

}
