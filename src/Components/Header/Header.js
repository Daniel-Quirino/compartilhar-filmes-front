import React from 'react';
import { makeStyles, AppBar, Toolbar, CardMedia } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import movie from '../../assets/movie.png'
import Button from '../Button/Button'
import Link from '@material-ui/core/Link';

import userAvatar from '../../assets/user_profile.png'
import SearchBar from './SearchBar'

function Header(props) {
  const classes = useStyles();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <div className={classes.margin}>
          <Link href="/">
            <img src={movie} alt='logo' className={classes.logo} />
          </Link>
        </div>

        {window.location.pathname === '/' &&
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
        }

        
        <div className={classes.grow} />

        <SearchBar />

        {props.loggedUser === null &&
          <>
            <Link href="/cadastrar" style={{ textDecoration: 'none' }}>
              <Button
                title='Cadastre-se'
                button='signIn'
              />
            </Link>
            <Link href="/entrar" style={{ textDecoration: 'none' }}>
              <Button
                title='Login'
                button='signUp'
              />
            </Link>
          </>
        }

        {!(props.loggedUser === null) &&
          <>
            <Link href={`/perfil/${props.loggedUser._id}`}>
              <CardMedia
                component="img"
                height="10"
                image={userAvatar}
                title="Avatar do usuário"
                classes={{
                  root: classes.avatar
                }}
              />
            </Link>
            {/* <Link href="/entrar" style={{textDecoration: 'none'}}>     */}
            <Button
              title='Sair'
              button='signUp'
              onClick={logout}
            />
            {/* </Link> */}
          </>
        }
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
  avatar: {
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    margin: '25px 25px 25px 25px',
    alignSelf: 'center',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    }
  },
  photo: {
    height: '32px'
  }
}));

export default Header;
