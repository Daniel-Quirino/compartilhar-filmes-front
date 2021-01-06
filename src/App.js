import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';


function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#1d9430',
        contrast: '#679be7'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Home/>
    </ThemeProvider>
  )
}

export default App;
