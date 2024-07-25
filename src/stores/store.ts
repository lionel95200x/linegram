import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import colorSchemeReducer from './colorSchemeSlice';
import darkModeReducer from './darkModeSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
