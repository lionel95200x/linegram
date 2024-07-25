import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export const colorSchemes = ['default', 'theme-1', 'theme-2', 'theme-3', 'theme-4'] as const;

export type ColorSchemes = (typeof colorSchemes)[number];

interface ColorSchemeState {
  value: ColorSchemes;
}

const getColorScheme = () => {
  const colorScheme = typeof window !== 'undefined' && localStorage.getItem('colorScheme');
  return colorSchemes.filter((item, key) => {
    return item === colorScheme;
  })[0];
};

const initialState: ColorSchemeState = {
  value:
    typeof window !== 'undefined' && window?.localStorage.getItem('colorScheme') === null
      ? 'default'
      : getColorScheme(),
};

export const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemes>) => {
      typeof window !== 'undefined' && window?.localStorage.setItem('colorScheme', action.payload);
      state.value = action.payload;
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => {
  if (typeof window !== 'undefined' && window?.localStorage.getItem('colorScheme') === null) {
    window?.localStorage.setItem('colorScheme', 'default');
  }

  return state.colorScheme.value;
};

export default colorSchemeSlice.reducer;
