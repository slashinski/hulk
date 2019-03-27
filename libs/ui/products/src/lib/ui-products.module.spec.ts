import { async, TestBed } from '@angular/core/testing';
import { UiProductsModule } from './ui-products.module';

describe('UiProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiProductsModule).toBeDefined();
  });
});
