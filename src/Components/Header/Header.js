import React from 'react';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';

import movie from '../../assets/movie.png'
import Button from '../Button/Button'

function Header(){
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <img src={movie} alt='logo' className={classes.logo} />
        <div className={classes.grow} />
        <Button 
          title='Cadastre-se'
          button='signIn'
        />
        <Button 
          title='Login'
          button='signUp'
        />
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
      height: '100vh',
      backgroundColor: theme.palette.background.dark
  },
  grow: {
      flexGrow: 1
  },
  logo: {
      height: 40,
      width: 45
  },
  appBar: {
    height: 70
  }
}));

export default Header;
