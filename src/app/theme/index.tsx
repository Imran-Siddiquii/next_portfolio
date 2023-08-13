import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface themeInterface {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
}
const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    backgroundColor: "#255557",
    textColor: "#ef2555",
    headingColor: "#548357",
  } as themeInterface,
  reducers: {
    getTheme: (state: themeInterface, action) => {},
    UpdateTheme: (
      state: themeInterface,
      action: PayloadAction<{ value: themeInterface }>
    ) => {},
  },
});

export const { UpdateTheme, getTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
