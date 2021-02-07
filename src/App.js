import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import SearchMovie from './Pages/SearchMovie';

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
      {searchMovie ? <SearchMovie searchMovie={searchMovie}/> : <Home/>}
    </ThemeProvider>
  )
}

export default App;
