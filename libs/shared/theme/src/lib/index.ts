import { InjectionToken } from '@angular/core';
import { bpfLightTheme } from './bpf-light';
import { bpfLightClassic } from './bpf-light-classic';

export const THEMES = new InjectionToken<Theme[]>('themes', {
  providedIn: 'root',
  factory: () => {
    return [bpfLightTheme, bpfLightClassic];
  }
});

export interface Theme {
  name: string;
  properties: { [key: string]: string };
  featureFlagVariation: string[];
  iconVersion: string;
}
