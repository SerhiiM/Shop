import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorDirectiveDirective} from './color-directive.directive';

@NgModule({
  declarations: [ColorDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorDirectiveDirective]
})
export class SharedModuleModule { }
