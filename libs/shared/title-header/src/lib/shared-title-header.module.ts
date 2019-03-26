import { NgModule } from '@angular/core';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, TranslateModule.forChild()],
  declarations: [TitleHeaderComponent],
  exports: [TitleHeaderComponent],
  providers: []
})
export class SharedTitleHeaderModule {}
