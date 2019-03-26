import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { SharedTitleHeaderModule } from '@hulk/shared/title-header';
import { UiAccordianModule } from '@hulk/ui/accordian';
import { UiCustomMaterialModule } from '@hulk/ui/custom-material';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [{ path: '', component: ProductsComponent }];

import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    SharedTitleHeaderModule,
    UiAccordianModule,
    UiCustomMaterialModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class UiModule {}
