// ====== All brand colors and brand specific styling should only live here ====== //

import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const lightTheme = {
  all: {
    borderRadius: '0.5rem',
    color: {
      colorWhite: '#fff',
      colorBlack: '#000',
      success: '#0f0',
      danger: '#f00',
    }
  },
  color: {
    primary: '#0E1C75', // dark blue
    secondary: '#E21266', // magenta
    warning: '#FCDA00', // yellow
    info: '#00CCC6', // teal
    light: '#dadada',
    dark: '#282828',
    grey: '#bdbdbd',
    muted: '#eee',
  }
};

// Force both themes to be consistent!
export const darkTheme: Theme = {
  // Make properties the same on both!
  all: { ...lightTheme.all },
  color: {
    primary: '#0E1C75', // dark blue
    secondary: '#E21266', // magenta
    warning: '#FCDA00', // yellow
    info: '#00CCC6', // teal
    light: '#282828',
    dark: '#dadada',
    grey: '#4e4e4e',
    muted: '#eee',
  }
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
