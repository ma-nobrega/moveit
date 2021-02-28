import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyle';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContextData {
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(null);

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    const storedTheme = Cookies.get('theme');
    setTheme(storedTheme || 'light');
  }, []);

  useEffect(() => {
    Cookies.set('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledComponentThemeProvider
        theme={theme === 'light' ? light : dark}
      >
        <GlobalStyles />
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};
