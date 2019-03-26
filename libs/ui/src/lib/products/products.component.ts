import { Component, OnInit } from '@angular/core';
import { PRODUCTS, Product } from '@hulk/data/products';
import { merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'hulk-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  mediaChanges$: Observable<{ isMobile: boolean }> = merge(
    this.media.asObservable(),
    of(this.media.isActive('lt-md'))
  ).pipe(
    map(() => {
      return { isMobile: this.media.isActive('lt-md') };
    })
  );

  constructor(private media: MediaObserver) {

  }

  ngOnInit() {
    this.products = PRODUCTS;
  }

  NavigateToProduct(productUrl: string) {
    window.open(productUrl);
  }
}
