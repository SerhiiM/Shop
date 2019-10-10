import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorDirectiveDirective} from './color-directive.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [ColorDirectiveDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [ColorDirectiveDirective, OrderByPipe]
})
export class SharedModuleModule { }
