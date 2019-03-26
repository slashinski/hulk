import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// libraries
import { SharedProductsModule } from '@hulk/shared/products';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
