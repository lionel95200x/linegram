import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

interface DarkModeState {
  value: boolean;
}

const initialState: DarkModeState = {
  value: typeof window !== 'undefined' && window?.localStorage.getItem('darkMode') === 'true',
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      typeof window !== 'undefined' && window?.localStorage.setItem('darkMode', action.payload.toString());
      state.value = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => {
  if (typeof window !== 'undefined' && window?.localStorage.getItem('darkMode') === null) {
    window?.localStorage.setItem('darkMode', 'false');
  }

  return state.darkMode.value;
};

export default darkModeSlice.reducer;
