import { async, TestBed } from '@angular/core/testing';
import { UiAccordianModule } from './ui-accordian.module';

describe('UiAccordianModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAccordianModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAccordianModule).toBeDefined();
  });
});
