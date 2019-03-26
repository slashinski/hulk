import { async, TestBed } from '@angular/core/testing';
import { UiCustomMaterialModule } from './ui-custom-material.module';

describe('UiCustomMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCustomMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCustomMaterialModule).toBeDefined();
  });
});
