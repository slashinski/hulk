import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCustomMaterialModule } from '@hulk/ui/custom-material';
import { UiFastClickModule } from '@hulk/ui/fast-click';
import { UiSplitLayoutModule } from '@hulk/ui/split-layout';

import { AccordionComponent } from './accordian/accordian.component';

@NgModule({
  imports: [
    CommonModule,
    UiCustomMaterialModule,
    UiFastClickModule,
    UiSplitLayoutModule
  ],
  declarations: [AccordionComponent],
  exports: [
    AccordionComponent
  ]
})
export class UiAccordianModule {}
