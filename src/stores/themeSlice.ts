import EnigmaSideMenu from '@/themes/Enigma/SideMenu';
import EnigmaSimpleMenu from '@/themes/Enigma/SimpleMenu';
import EnigmaTopMenu from '@/themes/Enigma/TopMenu';
import IcewallSideMenu from '@/themes/Icewall/SideMenu';
import IcewallSimpleMenu from '@/themes/Icewall/SimpleMenu';
import IcewallTopMenu from '@/themes/Icewall/TopMenu';
import RubickSideMenu from '@/themes/Rubick/SideMenu';
import RubickSimpleMenu from '@/themes/Rubick/SimpleMenu';
import RubickTopMenu from '@/themes/Rubick/TopMenu';
import TinkerSideMenu from '@/themes/Tinker/SideMenu';
import TinkerSimpleMenu from '@/themes/Tinker/SimpleMenu';
import TinkerTopMenu from '@/themes/Tinker/TopMenu';
import { getItem, setItem } from '@/utils/localStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export const themes = [
  {
    name: 'rubick',
    layout: 'side-menu',
    component: RubickSideMenu,
  },
  {
    name: 'rubick',
    layout: 'simple-menu',
    component: RubickSimpleMenu,
  },
  {
    name: 'rubick',
    layout: 'top-menu',
    component: RubickTopMenu,
  },
  {
    name: 'icewall',
    layout: 'side-menu',
    component: IcewallSideMenu,
  },
  {
    name: 'icewall',
    layout: 'simple-menu',
    component: IcewallSimpleMenu,
  },
  {
    name: 'icewall',
    layout: 'top-menu',
    component: IcewallTopMenu,
  },
  {
    name: 'tinker',
    layout: 'side-menu',
    component: TinkerSideMenu,
  },
  {
    name: 'tinker',
    layout: 'simple-menu',
    component: TinkerSimpleMenu,
  },
  {
    name: 'tinker',
    layout: 'top-menu',
    component: TinkerTopMenu,
  },
  {
    name: 'enigma',
    layout: 'side-menu',
    component: EnigmaSideMenu,
  },
  {
    name: 'enigma',
    layout: 'simple-menu',
    component: EnigmaSimpleMenu,
  },
  {
    name: 'enigma',
    layout: 'top-menu',
    component: EnigmaTopMenu,
  },
] as const;

export type Themes = (typeof themes)[number];

interface ThemeState {
  value: {
    name: Themes['name'];
    layout: Themes['layout'];
  };
}

export const getTheme = (search?: { name: Themes['name']; layout: Themes['layout'] }) => {
  const searchValues =
    search === undefined
      ? {
          name: getItem('theme'),
          layout: getItem('layout'),
        }
      : search;
  return themes.filter((item, key) => {
    return item.name === searchValues.name && item.layout === searchValues.layout;
  })[0];
};

const initialState: ThemeState = {
  value: {
    name: getItem('theme') === null ? themes[0].name : getTheme().name,
    layout: getItem('layout') === null ? themes[0].layout : getTheme().layout,
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Themes['name']>) => {
      state.value = {
        name: action.payload,
        layout: state.value.layout,
      };

      setItem('theme', action.payload);
    },
    setLayout: (state, action: PayloadAction<Themes['layout']>) => {
      state.value = {
        name: state.value.name,
        layout: action.payload,
      };

      setItem('layout', action.payload);
    },
  },
});

export const { setTheme, setLayout } = themeSlice.actions;

export const selectTheme = (state: RootState) => {
  if (getItem('theme') === null) {
    setItem('theme', 'rubick');
  }

  if (getItem('layout') === null) {
    setItem('layout', 'side-menu');
  }

  return state.theme.value;
};

export default themeSlice.reducer;
