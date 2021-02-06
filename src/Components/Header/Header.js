import React from 'react';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import movie from '../../assets/movie.png'
import Button from '../Button/Button'

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <div className={classes.margin}>
          <img src={movie} alt='logo' className={classes.logo} />
        </div>
        
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={(input) => props.getMovie(input.target.value)}
            placeholder="Procurar Filmes"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
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
  margin: {
    marginRight: '100px',
  },
  logo: {
      height: 40,
      width: 45
  },
  appBar: {
    height: 70
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'gray',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default Header;
