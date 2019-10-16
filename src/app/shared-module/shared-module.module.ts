import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirectiveDirective } from './color-directive.directive';
import { OrderByPipe } from './order-by.pipe';

const sharedItems = [ColorDirectiveDirective, OrderByPipe];

@NgModule({
  declarations: [...sharedItems],
  imports: [CommonModule],
  exports: [...sharedItems]
})
export class SharedModuleModule {}
