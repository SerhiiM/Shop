import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product-component/product-component.component';
import {ProductListComponentComponent} from './product-list-component/product-list-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponentComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductComponent,
    ProductListComponentComponent
  ]
})
// Убрать из названия один раз Module и из названия файла
export class ProductsModuleModule { }
