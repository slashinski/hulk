import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTitleHeaderModule } from '@hulk/shared/title-header';
import { UiAccordianModule } from '@hulk/ui/accordian';
import { UiCustomMaterialModule } from '@hulk/ui/custom-material';
import { TranslateModule } from '@ngx-translate/core';


import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    SharedTitleHeaderModule,
    UiAccordianModule,
    UiCustomMaterialModule,
    TranslateModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class UiModule {}
