import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { UiCustomMaterialModule } from '@hulk/ui/custom-material';

import { SplitLayoutComponent } from './split-layout/split-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    UiCustomMaterialModule
  ],
  declarations: [SplitLayoutComponent],
  exports: [SplitLayoutComponent]
})
export class UiSplitLayoutModule {}
