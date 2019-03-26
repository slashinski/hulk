import { async, TestBed } from '@angular/core/testing';
import { TestUtilitiesModule } from './shared-test-utilities.module';

describe('SharedTestUtilitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestUtilitiesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TestUtilitiesModule).toBeDefined();
  });
});
