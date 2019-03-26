import { async, TestBed } from '@angular/core/testing';
import { UiFastClickModule } from './ui-fast-click.module';

describe('UiFastClickModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiFastClickModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiFastClickModule).toBeDefined();
  });
});
