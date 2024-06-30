import React from 'react'
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/global';

import { HomeClient } from './pages/HomeClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyle/>
    <HomeClient></HomeClient>
  </React.StrictMode>,
)
