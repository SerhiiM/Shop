import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ProcessOrderComponentComponent } from './process-order-component/process-order-component.component';

@NgModule({
  declarations: [OrderComponent, ProcessOrderComponentComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class OrdersModuleModule { }
