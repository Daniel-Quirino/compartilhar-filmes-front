import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './Components/Header/Header';
import Routes from './routes';

function App() {
  const [ searchMovie, setSearchMovie ] = useState('');
  const getMovie = (movie) => {
    setSearchMovie(movie)
  }

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
      <Header getMovie={getMovie}/>
      <Routes searchMovie={searchMovie}/>
    </ThemeProvider>
  )
}

export default App;
