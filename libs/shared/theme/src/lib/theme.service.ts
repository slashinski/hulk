import { Inject, Injectable } from '@angular/core';
import { Theme, THEMES } from '.';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(@Inject(THEMES) private themes: Theme[]) {}

  getTheme({ featureFlagVariation }: { featureFlagVariation: string }) {
    const theme = this.themes.find(t => t.featureFlagVariation.includes(featureFlagVariation));
    if (!theme) {
      throw new Error(`Theme with feature flag variation "${featureFlagVariation}" not found.`);
    }
    return theme;
  }
}
