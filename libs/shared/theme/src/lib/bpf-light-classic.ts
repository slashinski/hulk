import { Theme } from '.';

export const bpfLightClassic: Theme = {
  name: 'bpfLightClassic',
  properties: {
    '--background': 'linear-gradient(45deg, #00bfa5 20%, #5ba5d1 100%)',
    '--on-background': '#fff',
    '--select-border-color': '#0091ea',
    '--select-icon-background': 'rgba(0, 145, 234, 0.6)',
    '--select-border-light-color': '#00bfa5',
    '--font-family': 'Poppins, Helvetica, Arial, sans-serif',
    '--on-primary': '#404243',
    '--on-primary-muted': '8d8f91',
    '--a-color': '#0091ea',
    '--a-hover-color': '#1565c0',
    '--theme-color-main': '#00bfa5',
    '--theme-color-main-dark': '#2aa69a',
    '--picture-tile-background': 'linear-gradient(45deg,rgba(0, 191, 165, 0.7) 0%,rgba(91, 165, 209, 0.7) 100%)',
    '--row-header': 'uppercase',
    '--row-header-color': '#00bfa5',
    '--sub-header-color': '#8d8f91',
    '--radio-button-unselected': '#00bfa5',
    '--radio-button-selected': '#00bfa5',
    '--payoff-projector-arrow': '#0091ea',
    '--pill-dark-background': '#00bfa5',
    '--pill-box-shadow': '0px 3px 6px 0px rgba(0, 0, 0, 0.16)',
    '--pill-border': '',
    '--pill-padding': '0',
    '--progress-bar-color': '#00bfa5',
    '--black-text': '#292525',
    '--pill-dark-font-weight': 'normal',
    '--completed-icon-color': '#00bfa5'
  },
  featureFlagVariation: ['existingHomepage'],
  iconVersion: 'v3'
};
