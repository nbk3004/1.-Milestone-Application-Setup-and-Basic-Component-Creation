// Header component: Header.jsx
import React, { useContext } from 'react';
import { AppContext } from './App';

const Header = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header>
      <h1>Twitter Clone</h1>
      <button style={{ backgroundColor: '#d49999', color: 'black' }} onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;

