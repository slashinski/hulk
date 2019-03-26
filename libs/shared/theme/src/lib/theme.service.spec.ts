import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { Theme, THEMES } from '.';

xdescribe('ThemeService', () => {
  let service: ThemeService;

  const mockTheme: Theme = {
    name: 'foo',
    properties: {},
    featureFlagVariation: ['newHomepage'],
    iconVersion: 'v4'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService, { provide: THEMES, useValue: [mockTheme] }]
    });
    service = TestBed.get(ThemeService);
  });

  describe('getTheme', () => {
    it('should return theme by name', () => {
      const theme = service.getTheme({ featureFlagVariation: 'newHomepage' });
      expect(theme).toEqual(mockTheme);
    });
    it('should error when theme not found', () => {
      expect(() => service.getTheme({ featureFlagVariation: 'somethingElse' })).toThrowError(
        'Theme with feature flag variation "somethingElse" not found.'
      );
    });
  });
});
