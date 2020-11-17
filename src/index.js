import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import { GlobalStyles, theme } from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
