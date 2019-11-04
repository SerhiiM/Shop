import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

@NgModule({
  declarations: [AdminProductEditComponent, AdminProductsComponent],
  imports: [CommonModule, SharedModuleModule, RouterModule],
  exports: []
})
export class AdminModule { }
