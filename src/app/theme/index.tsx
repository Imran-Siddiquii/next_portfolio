'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import themeLocal from '../utils/themeLocal';

interface themeInterface {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
}

const defaultTheme = () => {
  if (themeLocal.getData()) {
    themeLocal.getData();
  } else {
    themeLocal.setData({
      backgroundColor: '#255557',
      textColor: '#ef2555',
      headingColor: '#548357',
    });
  }
  return {
    backgroundColor: '#255557',
    textColor: '#ef2555',
    headingColor: '#548357',
  };
};
const initialState = defaultTheme();
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getTheme: () => {},
    updateTheme: (
      state: themeInterface,
      action: PayloadAction<{ themeColor: themeInterface }>,
    ) => {
      const { themeColor } = action.payload;
      themeLocal.setData(themeColor);
      return themeColor;
    },
  },
});

export const { updateTheme, getTheme } = themeSlice.actions;
export default themeSlice.reducer;
