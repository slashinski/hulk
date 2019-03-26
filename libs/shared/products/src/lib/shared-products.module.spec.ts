import { async, TestBed } from '@angular/core/testing';
import { SharedProductsModule } from './shared-products.module';

describe('SharedProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedProductsModule).toBeDefined();
  });
});
