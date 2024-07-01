import React from 'react'
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/global';

import { Routes } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyle/>
    <Routes />
  </React.StrictMode>,
)
