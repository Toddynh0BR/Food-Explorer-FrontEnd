import React from 'react'
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/global';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';
import { Routes } from './Routes';
import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <AuthProvider> 
      <Routes />
    </AuthProvider> 
   </ThemeProvider>
  </React.StrictMode>,
)
