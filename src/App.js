import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './Components/Header/Header';
import Routes from './routes';

function App() {
  const [ searchMovie, setSearchMovie ] = useState('');
  const [ loggedUser, setLoggedUser ] = useState(JSON.parse(localStorage.getItem('token')));
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
      <Header getMovie={getMovie} loggedUser={loggedUser}/>
      <Routes searchMovie={searchMovie} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
    </ThemeProvider>
  )
}

export default App;
