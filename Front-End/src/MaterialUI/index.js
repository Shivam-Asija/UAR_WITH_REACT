import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PageComponent from './Components/Page';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import HeaderNavigation from './Components/appBar';

import theme from './InternalTheme.js';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createMuiTheme(theme)}>
    <HeaderNavigation />
       <PageComponent>
          <App pageTitle={"Spectrum Reach - MUI Theme"} />
       </PageComponent>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

