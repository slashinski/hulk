import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedTitleHeaderModule } from '@hulk/shared/title-header';
@NgModule({
  imports: [
    CommonModule,
    SharedTitleHeaderModule
  ],
  declarations: [ProductsComponent],
  exports: [
    ProductsComponent,
    SharedTitleHeaderModule
  ]
})
export class SharedProductsModule {}
