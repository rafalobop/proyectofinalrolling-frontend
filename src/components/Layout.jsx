import React, { useState } from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes/themes';

const Layout = (props) => {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <NavBar />
        <Sidebar />
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
