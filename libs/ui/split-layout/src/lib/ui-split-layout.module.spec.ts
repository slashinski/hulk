import { async, TestBed } from '@angular/core/testing';
import { UiSplitLayoutModule } from './ui-split-layout.module';

describe('UiSplitLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSplitLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSplitLayoutModule).toBeDefined();
  });
});
