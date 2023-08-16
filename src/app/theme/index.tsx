import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface themeInterface {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
}
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    backgroundColor: '#255557',
    textColor: '#ef2555',
    headingColor: '#548357',
  } as themeInterface,
  reducers: {
    getTheme: (state: themeInterface, action) => {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ file: index.tsx:17 ~ themeInterface:', state, action);
    },
    updateTheme: (
      state: themeInterface,
      action: PayloadAction<{ value: themeInterface }>,
    ) => {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ file: index.tsx:17 ~ themeInterface:', state, action);
    },
  },
});

export const { updateTheme, getTheme } = themeSlice.actions;
export default themeSlice.reducer;
