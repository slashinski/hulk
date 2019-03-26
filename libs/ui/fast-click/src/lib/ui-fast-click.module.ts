import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastClickDirective } from './fast-click.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FastClickDirective],
  exports: [FastClickDirective],
  providers: []
})
export class UiFastClickModule {}
