import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './BgContext';
import ToggleThemeButton from './ChangeBgCol';

const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const color = isDarkMode ? 'black' : 'white';

  return (
    <div style={{ backgroundColor, color, height: '100vh' }}>
      <h1>Toggle Dark/Light Theme</h1>
      <ToggleThemeButton />
    </div>
  );
};

const UseContext = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default UseContext;
