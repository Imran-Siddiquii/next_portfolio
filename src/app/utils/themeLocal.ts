'use client';

interface themeInterface {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
}
const themeLocal = {
  getData: () => {
    if (typeof window !== 'undefined') {
      const theme: string | null = localStorage.getItem('theme');
      return theme ? JSON.parse(theme) : null;
    }
    return null;
  },
  setData: (data: themeInterface) => {
    if (typeof window !== 'undefined') {
      const theme = JSON.stringify(data);
      return localStorage.setItem('theme', theme);
    }
    return null;
  },
};

export default themeLocal;
