import { async, TestBed } from '@angular/core/testing';
import { SharedTitleHeaderModule } from './shared-title-header.module';

describe('SharedTitleHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedTitleHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedTitleHeaderModule).toBeDefined();
  });
});
